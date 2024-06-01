"use client";

import Image from "next/image";
import profile from "../../../assets/Pepe.jpeg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/@/components/ui/tabs";

export default function page() {
  const handleChallengeAnnotation = () => {
    console.log("handleChallengeAnnotation");
  };
  const handleAnnotateData = () => {
    console.log("handleAnnotateData");
  };
  return (
    <div className="flex-grow py-4">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center gap-4 md:gap-6">
          <Image src={profile} className="h-24 w-24 rounded-full shadow shadow-white" alt="profile" />
          <div className="flex justify-between items-center w-full ">
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2">AI company</p>
              <div className=" flex gap-4">
                <p className="py-1 px-2 w-fit text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[6px] text-[#bcd0ec] hover:text-[#edd346]">
                  Pro
                </p>
                0x123456789
              </div>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">750</p>
          </div>
        </div>

        <p className="mt-4 md:mt-6 text-sm ">
          THIS DIDFSSD FASDFSADFASDFS DESCRIPTOTIN FASDFASD FASDFA SFA SD FASD FASDF ADS FA SF ASD FD FS DF SDF AD F
          ASDFASD FASDFASDFASD ASDFA SDF ASD FASD FA SDF AD FASD FAS DFASDF
        </p>

        <div className="flex gap-4 mt-10 lg:mt-12">
          <button className="py-2 px-4 border rounded-[10px]" onClick={() => handleAnnotateData()}>
            Buy/Sell Data
          </button>
          <button
            className="py-2 px-4 border rounded-[10px]"
            onClick={() => handleChallengeAnnotation()}
          >
            Get Data Annotated
          </button>
        </div>

        <div className="mt-10 lg:mt-12">
          <p className="text-xl font-semibold md:text-2xl relative ">
            Job
            {/* <span className="flex justify-center items-center border rounded-full text-sm absolute h-7 w-7 -top-1 -right-8 ">
                10
              </span> */}
          </p>

          <Tabs defaultValue="Ongoing" className="w-full">
            <TabsList>
              <TabsTrigger value="Ongoing" className="">
                Ongoing
              </TabsTrigger>
              <TabsTrigger value="Previous">Previous</TabsTrigger>
            </TabsList>
            <TabsContent value="Ongoing">
              <div className="flex flex-col gap-y-4">
                <div className="p-4 border border-[#98aecd] rounded-xl flex justify-between">
                  <h5 className="text-lg">Job Title</h5>
                  <button className="p-1 px-4 border rounded-xl">View</button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Previous">
              {" "}
              <div className="flex flex-col gap-y-4">
                <div className="p-4 border border-[#98aecd] rounded-xl flex justify-between">
                  <h5 className="text-lg">Previous Job Title</h5>
                  <button className="p-1 px-4 border rounded-xl">View</button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
