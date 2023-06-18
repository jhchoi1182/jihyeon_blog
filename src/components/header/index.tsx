import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Search from "./Search";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center p-4 bg-river dark:bg-lightDark">
      <Link href="/">
        <h1 className="text-3xl font-bold slate-900 pl-10">{"jihyeon's Blog"}</h1>
      </Link>
      <nav className="flex items-center gap-4 text-white pr-10">
        <Search />
        <Link href="/">
          <AiFillHome className="text-2xl mr-1 cursor-pointer" />
        </Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
}
