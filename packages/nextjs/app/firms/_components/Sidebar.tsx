"use client";

import React from "react";
import { useAccount } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

export default function Sidebar() {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="w-[28%]  bg-white h-full text-black flex flex-col gap-y-6">
      <div className="flex flex-col justify-between h-full min-h-screen py-4 ">
        <div className="flex flex-col gap-y-6 ">
          <div className="border-b py-4 w-full">
            {/* top section */}
            <div className="w-11/12 mx-auto flex flex-col gap-y-4">
              <div className="border  rounded-xl p-3 flex flex-col gap-y-3">
                <div className="text-xl font-medium flex gap-x-4">
                  <div className="size-10 bg-black rounded-full"></div>
                  {connectedAddress
                    ? connectedAddress.slice(0, 6) + "..." + connectedAddress.slice(-4)
                    : "Connect Wallet"}
                </div>

                <div className="text-lg">
                  <p>Current tasks:</p>
                  {/* tasks */}
                </div>
              </div>
              <button className="btn w-full btn-secondary btn-md">Create new task</button>
            </div>
          </div>
          {/* histoy */}
          <div className="w-11/12 mx-auto">
            <h6 className="text-lg font-medium">History</h6>
            <div className="flex flex-col">
              {/* jobs */}
              <p className="border rounded-xl p-2.5 capitalize">name</p>
            </div>
          </div>
        </div>
        <div className="self-center">
          <RainbowKitCustomConnectButton />
        </div>
      </div>
    </div>
  );
}
