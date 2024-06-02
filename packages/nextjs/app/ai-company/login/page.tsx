"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { toast } from "react-hot-toast";
import { useAccount, useReadContracts, useWriteContract } from "wagmi";
import { Button } from "~~/components/@/components/ui/button";
import { Input } from "~~/components/@/components/ui/input";
import { Textarea } from "~~/components/@/components/ui/textarea";
import { AiCompanyProfile, AnnotatorProfile } from "~~/types/Types";
import { deployedContractABI_And_Address } from "~~/utils/contractInfo";

export default function Login() {
  const { address, isConnected } = useAccount();
  const [aiCompanyProfiles, setAiCompanyProfiles] = useState<AiCompanyProfile[]>([]);
  const [annotatorProfiles, setAnnotatorProfiles] = useState<AnnotatorProfile[]>([]);
  const [isNotAAnnotator, setIsNotAAnnotator] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");

  const { writeContract } = useWriteContract();
  const router = useRouter(); // Initialize the router

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

  console.log(contractData);

  const handleRegister = () => {
    writeContract({
      ...deployedContractABI_And_Address,
      functionName: "createAICompanyProfile",
      args: [companyName, description],
    });
    router.push(`/ai-company/profile/${address}`);
  };

  useEffect(() => {
    if (contractData && contractData[0].result) {
      const listOfAiCompanies: AiCompanyProfile[] = [...contractData[0].result];
      setAiCompanyProfiles(listOfAiCompanies);
    }
    if (contractData && contractData[1].result) {
      const listOfAnnotators: AnnotatorProfile[] = [...contractData[1].result];
      setAnnotatorProfiles(listOfAnnotators);
    }
  }, [contractData]);

  useEffect(() => {
    if (contractData && contractData[0].result) {
      const listOfAiCompanies: AiCompanyProfile[] = [...contractData[0].result];
      setAiCompanyProfiles(listOfAiCompanies);
    }
    if (contractData && contractData[1].result) {
      const listOfAnnotators: AnnotatorProfile[] = [...contractData[1].result];
      setAnnotatorProfiles(listOfAnnotators);
    }
  }, [contractData]);

  useEffect(() => {
    // Check if the user's address is present in the arrays
    const isInAiCompanyProfiles = aiCompanyProfiles.some(
      profile => profile.companyAddress.toLowerCase() === address?.toLowerCase(),
    );
    const isInAnnotatorProfiles = annotatorProfiles.some(
      profile => profile.annotatorAddress.toLowerCase() === address?.toLowerCase(),
    );

    setIsNotAAnnotator(!isInAnnotatorProfiles);

    // Navigate or display a toast message based on the user's role
    if (isInAiCompanyProfiles) {
      router.push(`/ai-company/profile/${address}`);
    } else if (isInAnnotatorProfiles) {
      toast.error("You are registered as an annotator. Please use a different address.", { id: "error" });
    }
  }, [address, aiCompanyProfiles, annotatorProfiles]);

  console.log(aiCompanyProfiles, annotatorProfiles);

  return (
    <div className="flex flex-col h-full w-full min-h-screen max-w-screen-xl items-center justify-center">
      {isConnected && isNotAAnnotator === true ? (
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
                  onChange={e => setCompanyName(e.target.value)}
                />
              </div>
              <div className="flex items-start gap-x-6">
                <span className="w-full text-xl font-semibold">Description:</span>
                <Textarea
                  className="border-b min-w-80 px-2"
                  placeholder="Company Description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
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
