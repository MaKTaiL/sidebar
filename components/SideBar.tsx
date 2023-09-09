import Link from "next/link";
import SideBarView from "./SideBarView";
import Image from "next/image";

export default async function SideBar() {
  return (
    <SideBarView>
      <div className="flex grow p-4 flex-col justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/"
            className="rounded-full bg-slate-100 hover:bg-slate-200 transition-colors w-full p-4"
          >
            Home
          </Link>
          <Link
            href="/AnotherPage"
            className="rounded-full bg-slate-100 hover:bg-slate-200 transition-colors w-full p-4"
          >
            Another Page
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src={
              "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
            }
            alt="Avatar"
            width={100}
            height={100}
            className="h-auto w-12 rounded-full"
          />
          <h1 className="text-2xl font-bold">John Doe</h1>
        </div>
      </div>
    </SideBarView>
  );
}
