"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Button } from "~~/components/@/components/ui/button";
import { Input } from "~~/components/@/components/ui/input";
import { Textarea } from "~~/components/@/components/ui/textarea";

export default function page() {
  const { address, isConnected } = useAccount();
  return (
    <div className="flex flex-col h-full w-full min-h-screen max-w-screen-xl items-center justify-center">
      {isConnected ? (
        <>
          <div className="flex flex-col gap-y-10 items-center w-full">
            <div className="space-y-2">
              <h4 className="text-6xl font-semibold">Annotators</h4>
              <p>Help Ai companies to annotate their data</p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-6">
                <span className="w-full text-xl font-semibold">Name:</span>
                <Input className="border-b min-w-80 px-2" placeholder="Name" />
              </div>
              <div className="flex items-start gap-x-6">
                <span className="w-full text-xl font-semibold">Description:</span>
                <Textarea className="border-b min-w-80 px-2" placeholder="Description" />
              </div>
            </div>
            <Button className="px-10" variant="outline">
              Register
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-10 items-center">
          <div className="space-y-2">
            <h4 className="text-6xl font-semibold">Annotators</h4>
            <p>Help Ai companies to annotate their data</p>
          </div>

          <ConnectButton />
        </div>
      )}
    </div>
  );
}
