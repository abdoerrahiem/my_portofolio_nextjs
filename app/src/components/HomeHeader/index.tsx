"use client";

import Image from "next/image";
import ImageProfile from "@/app/src/assets/images/profile.jpeg";
import Link from "next/link";
import { useState } from "react";

export default function HomeHeader() {
  const [active, setActive] = useState<string>("home");

  return (
    <div className="bg-grey-main flex flex-row items-center px-10 py-4">
      <Link href="/" className="flex flex-row items-center">
        <Image
          src={ImageProfile}
          alt="profile"
          className="w-[30px] h-[30px] rounded-full mr-2"
        />
        <p className="text-white">Abdur Rahim</p>
      </Link>
      <div className="flex flex-row flex-1 justify-center">
        <Link
          href="/"
          className={`mx-3 text-sm ${
            active === "home" ? "text-orange-main" : "text-white"
          }`}
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          href="/"
          className={`mx-3 text-sm ${
            active === "about" ? "text-orange-main" : "text-white"
          }`}
          onClick={() => setActive("about")}
        >
          About
        </Link>
        <Link
          href="/"
          className={`mx-3 text-sm ${
            active === "services" ? "text-orange-main" : "text-white"
          }`}
          onClick={() => setActive("services")}
        >
          Services
        </Link>
        <Link
          href="/"
          className={`mx-3 text-sm ${
            active === "resume" ? "text-orange-main" : "text-white"
          }`}
          onClick={() => setActive("resume")}
        >
          Resume
        </Link>
        <Link
          href="/"
          className={`mx-3 text-sm ${
            active === "projects" ? "text-orange-main" : "text-white"
          }`}
          onClick={() => setActive("projects")}
        >
          Projects
        </Link>
        <Link
          href="/"
          className={`mx-3 text-sm ${
            active === "Blogs" ? "text-orange-main" : "text-white"
          }`}
          onClick={() => setActive("Blogs")}
        >
          Blogs
        </Link>
      </div>
      <Link
        href="/"
        className="bg-orange-main px-4 py-2 rounded-full text-white text-xs"
      >
        Contact Me
      </Link>
    </div>
  );
}
