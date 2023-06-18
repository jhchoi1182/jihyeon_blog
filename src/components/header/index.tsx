import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Search from "./Search";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-river dark:bg-lightDark">
      <Link href="/">
        <h1 className="text-3xl font-bold slate-900 pl-10 sm:w-10">{"jihyeon's Blog"}</h1>
      </Link>
      <nav className="flex sm:block items-center text-white pr-10">
        <div className="mr-4 sm:flex sm:justify-end sm:mb-4 sm:mr-0">
          <Search />
        </div>
        <div className="flex sm:justify-end">
          <Link href="/">
            <AiFillHome className="text-2xl mr-5 cursor-pointer" />
          </Link>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
