"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../../../../assets/Pepe.jpeg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/@/components/ui/tabs";
import { View } from "lucide-react";
import { useReadContracts } from "wagmi";
import { deployedContractABI_And_Address } from "~~/utils/contractInfo";
import { getShortDisplayString } from "~~/utils/helper";

export default function page({ params }: { params: { address: string } }) {
  const address = params.address;

  const [name, setName] = useState("Name");
  const [description, setDescription] = useState("");
  const [annotatorTier, setAnnotatorTier] = useState("");
  const [annotatorScore, setAnnotatorScore] = useState(0);
  const [challengedSubmissions, setchallengedSubmissions] = useState();
  const [submissions, setsubmissions] = useState();
  const [jobs, setjobs] = useState();

  const { data: contractData } = useReadContracts({
    contracts: [
      {
        ...deployedContractABI_And_Address,
        functionName: "getAllAnnotatorProfiles",
        args: [],
      },
      {
        ...deployedContractABI_And_Address,
        functionName: "getSubmissions",
        args: [],
      },
    ],
  });

  useEffect(() => {
    if (contractData && contractData[0].result && contractData[1].result) {
      const listOfAnnotatorProfiles: any = [...contractData[0].result];
      const currentProfile = listOfAnnotatorProfiles.find(
        // @ts-ignore
        profile => profile.annotatorAddress.toLowerCase() === address.toLowerCase(),
      );

      if (currentProfile) {
        setName(currentProfile.name);
        setDescription(currentProfile.description);
        setAnnotatorTier(currentProfile.annotatorTier);
        setAnnotatorScore(currentProfile.annotatorScore);
        setchallengedSubmissions(currentProfile.challengedSubmissions);
        setsubmissions(currentProfile.submissions);
        setjobs(currentProfile.jobs.length);

        const ongoingJobsList: any[] = [];
        const previousJobsList: any[] = [];

        // @ts-ignore
        // currentProfile.submissions.forEach(jobID => {
        //   if (contractData[1]) {
        //     const job = contractData[1].result?.find(j => j === jobID);
        //     if (job) {
        //       // @ts-ignore
        //       if (isChallenged === true) {
        //         ongoingJobsList.push(job);
        //       } else {
        //         previousJobsList.push(job);
        //       }
        //     }
        //     setsubmissions(job);
        //   }
        // });

        // setOngoingJobs(ongoingJobsList);
        // setPreviousJobs(previousJobsList);
      }
    }
  }, [contractData, address]);
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
                <div className=" flex gap-4">
                  <p className="py-1 px-2 w-fit text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[6px] text-[#bcd0ec] hover:text-[#edd346]">
                    {annotatorTier === "" ? "Novice" : annotatorTier}
                  </p>
                  <p className="py-1 px-2 w-fit text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[6px] text-[#bcd0ec] hover:text-[#edd346]">
                    {annotatorScore}
                  </p>
                  {getShortDisplayString(address)}
                </div>
              </div>
              {/* <Edit /> */}
            </div>
          </div>

          <p className="mt-4 md:mt-6 text-sm opacity-80">{description}</p>
        </div>

        <div className="flex gap-4 py-8">
          <button
            className="py-2 px-4 w-fit border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:text-[#edd346] btn-shadow  bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[10px] text-[#bcd0ec]"
            onClick={() => handleAnnotateData()}
          >
            Annotate Data
          </button>
          <button
            className="py-2 px-4 w-fit border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:text-[#edd346] btn-shadow  bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[10px] text-[#bcd0ec]"
            onClick={() => handleChallengeAnnotation()}
          >
            Challenge Annotations
          </button>
        </div>

        <div className="py-2">
          <p className="text-2xl md:text-2xl relative ">
            Submissions
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
              {/* {submissions.map((submission, index) => ( */}
              <div
                // key={index}
                className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-y-1">
                    <h5 className="text-xl font-semibold  ">
                      {/* {submission.title} */}
                      Raw IMG Data
                      </h5>
                    <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-2xl">
                      {/* {submission.description} */}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex corporis illo perferendis commodi pariatur, animi amet alias necessitatibus mollitia eius, qui eum veniam ut nulla. Quod debitis temporibus quae eos.
                    </p>
                  </div>
                  <Link href="/ai-company/jobs">
                    <View className="" />
                  </Link>
                </div>
              </div>
              {/* ))} */}
            </TabsContent>
            <TabsContent value="Previous">
              <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-y-1">
                    <h5 className="text-xl font-semibold  ">Job Title</h5>
                    <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-2xl">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nesciunt, eos corporis inventore
                      recusandae quibusdam minima ipsam, non quaerat quidem iste nulla eligendi in saepe optio
                      consequatur modi quis! Magnam.
                    </p>
                  </div>
                  <Link href="/ai-company/jobs">
                    <View className="" />
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
