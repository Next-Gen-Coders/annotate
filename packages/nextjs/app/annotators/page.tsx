"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleRegisterClick = () => {
    console.log("Register button clicked");
    router.push("/profile");
    // Add your registration logic here
  };

  const handleConnectWalletClick = () => {
    console.log("Connect Wallet button clicked");
    setShowRegister(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-[10%] md:gap-8 gap-6">
      <div>
        <p className="xl:text-[6em] lg:text-[5em] md:text-[4em] text-[3em] font-semibold">
          Annotators
        </p>
        <p className="text-center text-lg md:text-xl">
          Help AI companies to annotate their data
        </p>
      </div>
      {!showRegister && (
        <button
          onClick={handleConnectWalletClick}
          className="py-2 px-4 border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]"
        >
          Connect Wallet
        </button>
      )}
      {showRegister && (
        <div className="flex flex-col gap-4 md:gap-6 xl:w-1/2 lg:w-3/5 md:w-[70%] w-[90%]">
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-lg md:text-xl lg:text-2xl">Name:</p>
            <input
              className="bg-transparent w-full p-2 focus:outline-none border-b border-white focus:border-[#edd346] text-lg md:text-xl lg:text-2xl"
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-lg md:text-xl lg:text-2xl">Description:</p>
            <input
              className="bg-transparent w-full p-2 focus:outline-none border-b border-white focus:border-[#edd346] text-lg md:text-xl lg:text-2xl"
              type="text"
              placeholder=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            onClick={handleRegisterClick}
            className="py-2 px-4 w-fit block mx-auto mt-4 border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;        