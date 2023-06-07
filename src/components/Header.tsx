import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-[#3498db]">
      <Link href="/">
        <h1 className="text-3xl font-bold slate-900">{"jihyeon's Blog"}</h1>
      </Link>
      <nav className="flex gap-4 text-white">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
