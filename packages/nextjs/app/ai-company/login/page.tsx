"use client";

import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Button } from "~~/components/@/components/ui/button";
import { Input } from "~~/components/@/components/ui/input";
import { Textarea } from "~~/components/@/components/ui/textarea";

export default function Page() {
  const { address, isConnected } = useAccount();
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");

  const handleRegister = () => {
    console.log("Company Name:", companyName);
    console.log("Description:", description);
    // Add any additional registration logic here
  };

  return (
    <div className="flex flex-col h-full w-full min-h-screen max-w-screen-xl items-center justify-center">
      {isConnected ? (
        <>
          <div className="flex flex-col gap-y-10 items-center w-full">
            <div className="space-y-2">
              <h4 className="text-6xl font-semibold">Innovators</h4>
              <p>Get your raw data labeled from experts</p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-6">
                <span className="w-full text-xl font-semibold">Company Name:</span>
                <Input 
                  className="border-b min-w-80 px-2" 
                  placeholder="Company Name" 
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="flex items-start gap-x-6">
                <span className="w-full text-xl font-semibold">Description:</span>
                <Textarea 
                  className="border-b min-w-80 px-2" 
                  placeholder="Company Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <Button className="px-10" variant="outline" onClick={handleRegister}>
              Register
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-10 items-center">
          <div className="space-y-2">
            <h4 className="text-6xl font-semibold">Innovators</h4>
            <p>Get your raw data labeled from experts</p>
          </div>

          <ConnectButton />
        </div>
      )}
    </div>
  );
}
