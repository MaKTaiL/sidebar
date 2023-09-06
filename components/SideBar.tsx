import Link from "next/link";
import SideBarView from "./SideBarView";

export default async function SideBar() {
  return (
    <SideBarView>
      <div className="flex items-center gap-4 p-4">
        <Link
          href="/"
          className="rounded-full bg-slate-100 hover:bg-slate-200 transition-colors w-full p-4 border"
        >
          Home
        </Link>
      </div>
    </SideBarView>
  );
}
