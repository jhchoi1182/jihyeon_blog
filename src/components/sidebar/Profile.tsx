import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/images/profile.webp";
import { AiFillGithub } from "react-icons/ai";

export default function Profile() {
  return (
    <div className="text-center mt-5">
      <Image
        className="rounded-full mx-auto pointer-events-none"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">jihyeon</h2>
      <h3 className="text-xl font-semibold mt-2">프론트엔드 신입 개발자</h3>
      <a
        className="inline-block mt-4 text-4xl hover:text-teal-500 cursor-pointer pointer-events-auto"
        href="https://github.com/jhchoi1182"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillGithub />
      </a>
    </div>
  );
}
