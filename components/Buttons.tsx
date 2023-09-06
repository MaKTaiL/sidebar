"use client";

import {
  useLargeSideBarStore,
  useSmallSideBarStore,
} from "@/stores/SideBarStore";
import { IoMenuSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import Link from "next/link";
import { cn } from "@/lib/Utils";
import { usePathname } from "next/navigation";

export function MenuButton() {
  const { isOpen: isSmallOpen, toggleSideBar: toggleSmallSideBar } =
    useSmallSideBarStore();
  const { isOpen: isLargeOpen, toggleSideBar: toggleLargeSideBar } =
    useLargeSideBarStore();

  const handleButtonClick = () => {
    if (window.innerWidth <= 640) {
      toggleSmallSideBar();
    } else {
      toggleLargeSideBar();
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className="h-auto w-auto rounded-full bg-inherit p-3 text-2xl hover:bg-gray-200"
    >
      {isSmallOpen || isLargeOpen ? <MdMenuOpen /> : <IoMenuSharp />}
    </button>
  );
}

export function LinkButton({ href, title }: { href: string; title: string }) {
  const pathName = usePathname();

  return (
    <Link href={href}>
      <button
        className={cn({
          "w-full justify-start rounded-full bg-inherit hover:bg-gray-200":
            true,
          "bg-blue-100 font-medium text-blue-500 hover:bg-blue-200":
            pathName == href,
        })}
      >
        {title}
      </button>
    </Link>
  );
}
