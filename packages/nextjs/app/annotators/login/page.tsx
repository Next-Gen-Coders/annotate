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
  const [isNotAiCompany, setIsNotAiCompany] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { writeContractAsync } = useWriteContract();
  const router = useRouter();

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

  const handleRegister = async () => {
    writeContractAsync({
      ...deployedContractABI_And_Address,
      functionName: "createAnnotatorProfile",
      args: [name, description],
    });
    router.push("/home");
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
  console.log(contractData);
  useEffect(() => {
    // Check if the user's address is present in the arrays
    const isInAiCompanyProfiles = aiCompanyProfiles.some(
      profile => profile.companyAddress.toLowerCase() === address?.toLowerCase(),
    );
    const isInAnnotatorProfiles = annotatorProfiles.some(
      profile => profile.annotatorAddress.toLowerCase() === address?.toLowerCase(),
    );

    setIsNotAiCompany(!isInAiCompanyProfiles);

    // Navigate or display a toast message based on the user's role
    if (isInAnnotatorProfiles) {
      router.push("/home");
    } else if (isInAiCompanyProfiles) {
      toast.error("You are registered as an AI company. Please use a different address.", { id: "error" });
    }
  }, [address, aiCompanyProfiles, annotatorProfiles]);

  return (
    <div className="flex flex-col h-full w-full min-h-screen max-w-screen-xl items-center justify-center">
      {isConnected && isNotAiCompany ? (
        <>
          <div className="flex flex-col gap-y-10 items-center w-full">
            <div className="space-y-2">
              <h4 className="text-6xl font-semibold">Annotators</h4>
              <p>Help AI companies to annotate their data</p>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-6">
                <span className="w-full text-xl font-semibold">Name:</span>
                <Input
                  className="border-b min-w-80 px-2"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="flex items-start gap-x-6">
                <span className="w-full text-xl font-semibold">Description:</span>
                <Textarea
                  className="border-b min-w-80 px-2"
                  placeholder="Description"
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
            <h4 className="text-6xl font-semibold">Annotators</h4>
            <p>Help AI companies to annotate their data</p>
          </div>

          <ConnectButton />
        </div>
      )}
    </div>
  );
}
