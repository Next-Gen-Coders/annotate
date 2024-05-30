import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around py-2 md:py-4 lg:py-6">
      <p className="akaya-font md:text-3xl text-xl" >ANNOTATE</p>
      <div className="flex gap-4 md:gap-6 text-md md:text-lg items-center font-semibold">
        <div className="relative">
          Market Place
          <p className="absolute top-[-1em] text-sm font-md right-[-1em] text-[#edd346]">BETA</p>
        </div>
        <Link  href="/annotators">Annotate</Link>
        <button className="py-2 px-4 border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] btn-shadow bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;