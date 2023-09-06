import Image from "next/image";
import { MenuButton } from "./Buttons";
import Link from "next/link";

export async function NavBar() {
  return (
    <nav className="fixed border-b top-0 z-30 flex h-16 w-full items-center justify-between bg-white px-2">
      <div className="flex items-center gap-4">
        <div>
          <MenuButton />
        </div>
        <div>
          <Link href="/">
            <Image
              src={"/next.svg"}
              alt="Next Logo"
              width={0}
              height={0}
              className="h-auto w-24"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
