import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.webp";

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm jihyeon"}</h2>
      <h3 className="text-xl font-semibold">프론트엔드 신입 개발자</h3>
      <Link href="/contact">
        <button className="bg-slate-300 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
      </Link>
    </section>
  );
}
