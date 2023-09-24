import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageProfile from "@/app/src/assets/images/profile.jpeg";

export default function HomeIntro() {
  return (
    <div className="px-10 py-10 flex flex-row">
      <div className="flex-1 mt-5">
        <div className="border-[1px] border-grey-main rounded-full px-3 py-1 inline-block mb-3">
          <p className="text-sm">Hello!</p>
        </div>
        <p className="text-orange-main text-3xl font-medium mb-2">
          I&apos;m Abdur Rahim,
        </p>
        <p className="text-grey-main text-3xl font-medium mb-2">
          Fullstack Developer
        </p>
        <p className="text-grey-main text-3xl font-medium">
          based in Indonesia.
        </p>
        <div className="my-8">
          <p className="text-grey-main text-sm">
            With over five years of experience, I bring my expertise as
          </p>
          <p className="text-grey-main text-sm">
            a Fullstack Developer, having contributed to numerous
          </p>
          <p className="text-grey-main text-sm">
            companies and startups throughout my career.
          </p>
        </div>
        <div className="flex flex-row mb-10">
          <div className="flex flex-row items-center">
            <Link
              href="/"
              className="bg-grey-main flex flex-row rounded-full pl-1 items-center mr-3"
            >
              <div className="bg-white rounded-full w-[35px] h-[35px] items-center justify-center flex mr-2">
                <i className="fa fa-play text-grey-main" />
              </div>
              <div className="bg-orange-main px-5 py-[10px] rounded-full">
                <p className="text-sm text-white font-medium">
                  View My Portofolio
                </p>
              </div>
            </Link>
            <Link
              href="/"
              className="border-[1px] border-grey-main rounded-full px-5 py-2"
            >
              <p className="text-sm">Hire Me</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row mr-3">
            <Image
              src={ImageProfile}
              alt="profile"
              className="w-[50px] h-[50px] rounded-full border-[2px] border-white"
            />
            <Image
              src={ImageProfile}
              alt="profile"
              className="w-[50px] h-[50px] rounded-full border-[2px] border-white -ml-5"
            />
            <Image
              src={ImageProfile}
              alt="profile"
              className="w-[50px] h-[50px] rounded-full border-[2px] border-white -ml-5"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-grey-main">450+</p>
            <p className="text-xs text-grey-main">Happy Clients</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={ImageProfile}
          alt="profile"
          className="rounded-full w-[100%] h-auto"
        />
      </div>
    </div>
  );
}
