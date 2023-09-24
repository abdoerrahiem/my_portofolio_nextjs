import type { Metadata } from "next";
import HomeHeader from "./src/components/HomeHeader";
import HomeIntro from "./src/components/HomeIntro";
import HomeService from "./src/components/HomeService";

export const metadata: Metadata = {
  title: "Welcome | Abdur Rahim",
  description: "Welcome to my web portofolio",
};

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeIntro />
      <HomeService />
    </>
  );
}
