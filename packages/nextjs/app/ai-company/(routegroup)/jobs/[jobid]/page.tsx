"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/@/components/ui/tabs";
import { XIcon } from "lucide-react";
import { useReadContracts } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/@/components/ui/dialog";
import { Job } from "~~/types/Types";
import { deployedContractABI_And_Address } from "~~/utils/contractInfo";

export default function JobPage() {
  const params = useParams();
  const jobID = params.jobid;

  const [jobDetails, setJobDetails] = useState<Job | null>(null);

  const { data: contractData } = useReadContracts({
    contracts: [
      {
        ...deployedContractABI_And_Address,
        functionName: "getAllJobs",
        args: [],
      },
    ],
  });

  const endJob = () => {
    console.log("end this job ");
  };

  const distributeReward = () => {
    console.log("This is distribut reward ");
  };

  useEffect(() => {
    if (contractData && contractData[0].result) {
      const allJobs: Job[] = contractData[0].result.map(job => ({ ...job }));
      const job = allJobs.find(job => job.jobID.toString() === jobID);
      if (job) {
        setJobDetails(job);
        console.log(job);
      }
    }
  }, [contractData, jobID]);

  console.log(jobDetails);

  return (
    <div className="w-11/12 max-w-screen-xl mx-auto my-6 border border-[#98aecd] rounded-[10px]  bg-[#98aecd] bg-opacity-10">
      <div className="w-[95%] px-2 mx-auto py-8">
        <div className="flex flex-col gap-y-6 pb-10">
          <div className="flex justify-between items-center">
            <h5 className="text-5xl font-semibold">{jobDetails?.title}</h5>
            <button
              onClick={jobDetails?.isActive ? endJob : distributeReward}
              className="py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
            >
              {jobDetails?.isActive ? <> END </> : <> Distribute Rewards</>}
            </button>
          </div>
          <div className="flex justify-between gap-4 w-fit items-center h-8 ">
            <p className="text-lg font-medium text-white/70">
              Reward:{" "}
              <span className="text-xl font-normal text-white">{Number(jobDetails?.rewardPool).toString()} Matic</span>
            </p>
            <div className="h-5 w-0.5 bg-white" />
            <p className="text-lg font-medium text-white/70">
              Annotator: <span className="text-xl font-normal text-white">{jobDetails?.annotatorType}</span>
            </p>
          </div>
          <p className="max-w-4xl text-white text-opacity-80">
            <span className="text-lg font-semibold text-white pr-2">Description:</span> {jobDetails?.description}
          </p>
          <div className="flex gap-8 pt-6">
            {/* <button className="relative py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]">
              Open Annotator{" "}
              <span className="absolute right-[-1em] -top-7 bg-[#2A2F40] border p-1 px-2 rounded-[8px] text-[#edd346] font-medium">
                Coming soon
              </span>
            </button> */}
            <button className="py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]">
              Download Raw Data
            </button>
          </div>
        </div>
        <Tabs defaultValue="annootators" className="w-full">
          <TabsList className="flex w-fit gap-x-6 py-8 pb-14">
            <TabsTrigger
              value="annootators"
              className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
            >
              Annotators
            </TabsTrigger>
            <TabsTrigger
              value="submissions"
              className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
            >
              Submissions
            </TabsTrigger>
            <TabsTrigger
              value="challenges"
              className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
            >
              Challenges
            </TabsTrigger>
          </TabsList>
          <TabsContent value="annnonator">
            <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                  <div className="size-10 bg-white rounded-full" />
                  <div>
                    <h5 className="text-2xl font-semibold capitalize">name</h5>
                    <p className="w-11/12">0x123456789</p>
                  </div>
                </div>
                <button className="py-2 px-8 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]">
                  View
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="submissions">
            <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                  <div className="size-10 bg-white rounded-full" />
                  <div>
                    <h5 className="text-2xl font-semibold capitalize">name</h5>
                    <p className="w-11/12">0x123456789</p>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger className="py-2 px-8 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]">
                    View
                  </DialogTrigger>
                  <DialogContent className="bg-[#2A2F40] border border-[#98aecd] rounded-xl">
                    <DialogHeader>
                      <DialogTitle>Submission</DialogTitle>
                      <DialogDescription>
                        <div className="flex flex-col gap-y-6  justify-between py-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-4">
                              <div className="size-10 bg-white rounded-full" />
                              <div>
                                <h5 className="text-2xl font-semibold capitalize">name</h5>
                                <div className=" flex gap-4">0x123456789</div>
                              </div>
                            </div>
                            <p className="py-1 px-2 w-fit text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[6px] text-[#bcd0ec] hover:text-[#edd346]">
                              Pro
                            </p>
                          </div>
                          <button className="py-2 px-4 h-fit w-full bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]">
                            Download Raw Data
                          </button>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="challenges">
            {" "}
            <div className="border border-[#98aecd] rounded-[10px] w-4/6 px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
              <div className="flex gap-x-10 justify-between w-full items-center">
                <div className="flex items-center gap-x-4">
                  <div className="size-10 bg-white rounded-full" />
                  <div>
                    <h5 className="text-2xl font-semibold">name</h5>
                    <p className="w-11/12">0x123456789</p>
                  </div>
                </div>
                <XIcon />
                <div className="flex items-center gap-x-4">
                  <div className="size-10 bg-white rounded-full" />
                  <div>
                    <h5 className="text-2xl font-semibold">name</h5>
                    <p className="w-11/12">0x123456789</p>
                  </div>
                </div>
                <button className="py-2 px-6 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]">
                  Resolve
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
