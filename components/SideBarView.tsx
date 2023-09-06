"use client";

import { cn } from "@/lib/Utils";
import {
  useLargeSideBarStore,
  useSmallSideBarStore,
} from "@/stores/SideBarStore";
import { useEffect, useRef, useState } from "react";

export default function SideBar({ children }: { children: React.ReactNode }) {
  const { isOpen: isSmallOpen, setSideBar: setSmallSideBar } =
    useSmallSideBarStore();
  const { isOpen: isLargeOpen, setSideBar: setLargeSideBar } =
    useLargeSideBarStore();
  const [windowWidth, setWindowWidth] = useState(0);
  const [previousWindowWidth, setPreviousWindowWidth] = useState(0);
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.innerWidth <= 640 && setLargeSideBar(false);
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, [setLargeSideBar]);

  useEffect(() => {
    if (windowWidth > 640 && previousWindowWidth <= 640) {
      setSmallSideBar(false);
      setLargeSideBar(true);
    } else if (windowWidth <= 640 && previousWindowWidth > 640) {
      setSmallSideBar(false);
      setLargeSideBar(false);
    }
    setPreviousWindowWidth(windowWidth);
  }, [windowWidth, previousWindowWidth, setSmallSideBar, setLargeSideBar]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        sideBarRef.current &&
        event.target instanceof HTMLElement &&
        !sideBarRef.current.contains(event.target) &&
        window.innerWidth <= 640
      ) {
        setSmallSideBar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [sideBarRef, setSmallSideBar]);

  return (
    <>
      <div
        className={cn({
          "fixed -z-10 h-full w-full bg-black opacity-0 transition-opacity sm:hidden":
            true,
          "z-20 opacity-20": isSmallOpen,
        })}
      ></div>
      <aside
        ref={sideBarRef}
        className={cn({
          "fixed top-16 z-30 rounded-r-2xl": true,
          "flex h-[calc(100%-4rem)] w-64 flex-col justify-between bg-white transition-transform sm:hidden":
            true,
          "-translate-x-full": !isSmallOpen,
          "shadow-right": isSmallOpen,
        })}
      >
        {children}
      </aside>
      <aside
        className={cn({
          "fixed top-16 flex h-[calc(100%-4rem)] w-64 flex-shrink-0 flex-col justify-between bg-white transition-transform":
            true,
          "-translate-x-full": !isLargeOpen,
        })}
      >
        {children}
      </aside>
    </>
  );
}
