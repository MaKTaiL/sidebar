"use client";

import { cn } from "@/lib/Utils";
import { useLargeSideBarStore } from "@/stores/SideBarStore";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isOpen: isLargeOpen } = useLargeSideBarStore();

  return (
    <div
      className={cn({
        "sm:ml-64": isLargeOpen,
        "mt-16 flex grow bg-slate-100 p-4 transition-all max-sm:z-10": true,
      })}
    >
      {children}
    </div>
  );
}
