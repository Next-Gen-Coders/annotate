"use client";

import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContracts, useWriteContract } from "wagmi";
import { Button } from "~~/components/@/components/ui/button";
import { Input } from "~~/components/@/components/ui/input";
import { Textarea } from "~~/components/@/components/ui/textarea";
import { deployedContractABI_And_Address } from "~~/utils/contractInfo";

export default function Login() {
  const { address, isConnected } = useAccount();

  const { writeContract } = useWriteContract();

  const register = () => {
    writeContract({
      ...deployedContractABI_And_Address,
      functionName: "createAICompanyProfile",
      args: ["usrAddress", "a"],
    });
  };

  const { data: contractData } = useReadContracts({
    contracts: [
      {
        ...deployedContractABI_And_Address,
        functionName: "getAllAICompanyProfiles",
        args: [],
      },
      {
        ...deployedContractABI_And_Address,
        functionName: "getAllAnnotatorProfiles",
        args: [],
      },
    ],
  });

// if the user is already present in the array when connecting then transfer them to the respective page but if opp then give a toast saying you are a dvertiser cannot login as annotator

  return (
    <div className="flex flex-col h-full w-full min-h-screen max-w-screen-xl items-center justify-center">
      {isConnected ? (
        <>
          <div className="flex flex-col gap-y-10 items-center w-full">
            <div className="space-y-2">
              <h4 className="text-6xl font-semibold">Innovators</h4>
              <p>Get your raw data lableled from experts</p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-6">
                <span className="w-full text-xl font-semibold">Comapany Name:</span>
                <Input className="border-b min-w-80 px-2" placeholder="Company Name" />
              </div>
              <div className="flex items-start gap-x-6">
                <span className="w-full text-xl font-semibold">Description:</span>
                <Textarea className="border-b min-w-80 px-2" placeholder="Company Description" />
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
            <h4 className="text-6xl font-semibold">Innovators</h4>
            <p>Get your raw data lableled from experts</p>
          </div>

          <ConnectButton />
        </div>
      )}
    </div>
  );
}
