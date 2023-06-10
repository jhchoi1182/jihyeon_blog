import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-river">
      <Link href="/">
        <h1 className="text-3xl font-bold slate-900 pl-10">{"jihyeon's Blog"}</h1>
      </Link>
      <nav className="flex items-center gap-4 text-white pr-10">
        <Search />
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
}
