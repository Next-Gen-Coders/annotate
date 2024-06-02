"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/@/components/ui/tabs";
import { XIcon } from "lucide-react";
import { Button } from "~~/components/@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~~/components/@/components/ui/dialog";
import { Input } from "~~/components/@/components/ui/input";

export default function Page() {
  const [reward, setReward] = useState("100 Matic");
  const [annotator, setAnnotator] = useState("Pro");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae non, quaerat soluta commodi repellendus porro debitis atque tempore nulla beatae, voluptatibus dicta omnis iste voluptatum sunt numquam aperiam error.",
  );
  const [name, setName] = useState("name");
  const [walletAddress, setWalletAddress] = useState("0x123456789");

  const handleAnnotate = () => {
    console.log("Annotate button clicked");
  };

  const handleOpenAnnotator = () => {
    console.log("Open Annotator button clicked");
  };

  const handleDownloadRawData = () => {
    console.log("Download Raw Data button clicked");
  };

  const handleView = () => {
    console.log("View button clicked for", name, walletAddress);
  };

  const handleResolve = () => {
    console.log("handle resolve clicked");
  };

  return (
    <div className="w-11/12 max-w-screen-xl mx-auto my-6 border border-[#98aecd] rounded-[10px]  bg-[#98aecd] bg-opacity-10">
      <div className="w-[95%] px-2 mx-auto py-8">
        <div className="flex flex-col gap-y-6 pb-10">
          <div className="flex justify-between items-center">
            <h5 className="text-5xl font-semibold">JOB 1</h5>

            {/* if annotator is annotating  */}
            {false ? (
              <button
                onClick={handleAnnotate}
                className="py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
              >
                Annotate
              </button>
            ) : (
              <Dialog>
                <DialogTrigger className="py-2 px-8 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]">
                  Submit
                </DialogTrigger>
                <DialogContent className="bg-[#2A2F40] border border-[#98aecd] rounded-xl">
                  <DialogHeader>
                    <DialogTitle>Submit Annotated Data</DialogTitle>
                    <DialogDescription>
                      <form>
                        <div className="py-10 flex flex-col gap-y-10 items-center text-center">
                          <p>
                            {" "}
                            Please upload a folder and dont forget to follow the rules displayed in the job description
                          </p>
                          <Input
                            type="file"
                            className="border text-center  border-[#98aecd] rounded-[10px]  px-3 py-20 w-full  bg-[#98aecd] bg-opacity-10 flex justify-center items-center"
                            placeholder="+ Upload Folder"
                            // onChange={handleFileChange}
                          />
                          <div className="mb-4 w-full">
                            <label className="block text-left font-semibold py-2" htmlFor="title">
                              Annotated Data Link
                            </label>
                            <p
                              className="border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10 focus:outline-none focus:shadow-outline"
                              id="title"
                            >
                              xyz.com
                            </p>
                          </div>
                          <Button
                            type="submit"
                            className="border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10 "
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            )}
          </div>
          <div className="flex justify-between gap-4 w-fit items-center h-8 ">
            <p className="text-lg font-medium text-white/70">
              Reward: <span className="text-xl font-normal text-white">{reward}</span>
            </p>
            <div className="h-5 w-0.5 bg-white" />
            <p className="text-lg font-medium text-white/70">
              Annotator: <span className="text-xl font-normal text-white">{annotator}</span>
            </p>
          </div>
          <p className="max-w-4xl text-white text-opacity-80">
            <span className="text-lg font-semibold text-white pr-2">Description:</span> {description}
          </p>
          <div className="flex gap-8 pt-6">
            <button
              onClick={handleOpenAnnotator}
              className="relative py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
            >
              Open Annotator{" "}
              <span
                onClick={handleDownloadRawData}
                className="absolute right-[-1em] -top-7 bg-[#2A2F40] border p-1 px-2 rounded-[8px] text-[#edd346] font-medium"
              >
                Coming soon
              </span>{" "}
            </button>
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
          <TabsContent value="annootators">
            <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                  <div className="size-10 bg-white rounded-full" />
                  <div>
                    <h5 className="text-2xl font-semibold capitalize">{name}</h5>
                    <p className="w-11/12">{walletAddress}</p>
                  </div>
                </div>
                <button
                  onClick={handleView}
                  className="py-2 px-8 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
                >
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
                    <h5 className="text-2xl font-semibold capitalize">{name}</h5>
                    <p className="w-11/12">{walletAddress}</p>
                  </div>
                </div>
                <button
                  onClick={handleView}
                  className="py-2 px-8 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
                >
                  View
                </button>
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
                    <h5 className="text-2xl font-semibold">{name}</h5>
                    <p className="w-11/12">{walletAddress}</p>
                  </div>
                </div>
                <XIcon />
                <div className="flex items-center gap-x-4">
                  <div className="size-10 bg-white rounded-full" />
                  <div>
                    <h5 className="text-2xl font-semibold">{name}</h5>
                    <p className="w-11/12">{walletAddress}</p>
                  </div>
                </div>
                <button
                  onClick={handleResolve}
                  className="py-2 px-6 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
                >
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
