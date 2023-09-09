"use client";

import {
  useLargeSideBarStore,
  useSmallSideBarStore,
} from "@/stores/SideBarStore";
import { IoMenuSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

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
