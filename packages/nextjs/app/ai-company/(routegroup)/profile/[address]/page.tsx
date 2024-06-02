"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../../../../assets/Pepe.jpeg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/@/components/ui/tabs";
import { useReadContracts } from "wagmi";
import JobCard from "~~/components/JobCard";
import { AiCompanyProfile, Job } from "~~/types/Types";
import { deployedContractABI_And_Address } from "~~/utils/contractInfo";
import { getShortDisplayString } from "~~/utils/helper";

export default function AiCompanyProfilePage({ params }: { params: { address: string } }) {
  const address = params.address;

  const [name, setName] = useState("Name");
  const [description, setDescription] = useState("");
  const [ongoingJobs, setOngoingJobs] = useState<Job[]>([]);
  const [previousJobs, setPreviousJobs] = useState<Job[]>([]);
  const [listOfAllJobs, setlistOfAllJobs] = useState([]);

  const { data: contractData } = useReadContracts({
    contracts: [
      {
        ...deployedContractABI_And_Address,
        functionName: "getAllAICompanyProfiles",
        args: [],
      },
      {
        ...deployedContractABI_And_Address,
        functionName: "getAllJobs",
        args: [],
      },
    ],
  });

  useEffect(() => {
    if (contractData && contractData[0].result && contractData[1].result) {
      const listOfAiCompanies: AiCompanyProfile[] = [...contractData[0].result];
      const currentProfile = listOfAiCompanies.find(
        profile => profile.companyAddress.toLowerCase() === address?.toLowerCase(),
      );

      if (currentProfile) {
        setName(currentProfile.name);
        setDescription(currentProfile.description);

        const ongoingJobsList: Job[] = [];
        const previousJobsList: Job[] = [];

        currentProfile.jobs.forEach(jobID => {
          if (contractData[1]) {
            const job = contractData[1].result?.find((j: Job) => j.jobID === jobID);
            if (job) {
              if (job.isActive) {
                ongoingJobsList.push(job);
              } else {
                previousJobsList.push(job);
              }
            }
          }
        });

        setOngoingJobs(ongoingJobsList);
        setPreviousJobs(previousJobsList);
      }
    }
  }, [contractData, address]);

  console.log(contractData, ongoingJobs, previousJobs);

  const handleChallengeAnnotation = () => {
    console.log("handleChallengeAnnotation");
  };
  const handleAnnotateData = () => {
    console.log("handleAnnotateData");
  };
  return (
    <div className="flex-grow py-4 w-full">
      <div className="w-[95%] max-w-screen-lg mx-auto">
        <div className="border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10">
          <div className="flex items-center gap-4 md:gap-6">
            <Image src={profile} className="h-24 w-24 rounded-full shadow shadow-white" alt="profile" />
            <div className="flex justify-between items-center w-full ">
              <div>
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2">{name}</p>
                <div className=" flex gap-4">{getShortDisplayString(address)}</div>
              </div>
              {/* <Edit /> */}
            </div>
          </div>

          <p className="mt-4 md:mt-6 text-sm opacity-80">{description}</p>
        </div>

        <div className="flex gap-4 py-8">
          <Link
            href={"/home"}
            className="py-2 px-4 w-fit border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:text-[#edd346] btn-shadow  bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[10px] text-[#bcd0ec]"
            onClick={() => handleAnnotateData()}
          >
            Buy/Sell Data
          </Link>
          <Link
            href={"/ai-company/post-job"}
            className="py-2 px-4 w-fit border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:text-[#edd346] btn-shadow  bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[10px] text-[#bcd0ec]"
            onClick={() => handleChallengeAnnotation()}
          >
            Get Data Annotated
          </Link>
        </div>

        <div className="py-2">
          <p className="text-2xl relative ">
            Jobs
            {/* <span className="flex justify-center items-center border rounded-full text-sm absolute h-7 w-7 -top-1 -right-8 ">
                10
              </span> */}
          </p>

          <Tabs defaultValue="Ongoing" className="w-full">
            <TabsList className="flex gap-x-6 py-8 pb-14">
              <TabsTrigger
                value="Ongoing"
                className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
              >
                Ongoing
              </TabsTrigger>
              <TabsTrigger
                value="Previous"
                className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
              >
                Previous
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Ongoing">
              {ongoingJobs.map(job => (
                <JobCard key={job.jobID} job={job} />
              ))}
            </TabsContent>
            <TabsContent value="Previous">
              {previousJobs.map(job => (
                <JobCard key={job.jobID} job={job} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
