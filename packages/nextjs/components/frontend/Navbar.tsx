import React from "react";
import { Poller_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poller_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="flex justify-around py-2 md:py-4 lg:py-6">
      <div className="flex items-center gap-x-2">
        <Image src="/icon.png" alt="logo" className="size-12" width={100} height={100} />
        <p className={`md:text-3xl text-xl ${font.className}`}>ANNOTATE</p>
      </div>
      <div className="flex gap-x-8 items-center font-semibold">
        <div className="relative">
          Market Place
          <p className="absolute top-[-1em] text-sm font-md right-[-1em] text-[#edd346]">BETA</p>
        </div>
        <Link href="/annotators/login">Annotate</Link>
        <Link
          href="/ai-company/login"
          className="py-2 px-4 border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] btn-shadow bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
