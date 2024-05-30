"use client"
import React from "react";
import Image from "next/image";
import profile from "../../assets/Pepe.jpeg";
import viewJobs from "../../assets/jobs.svg";
import marketPlace from "../../assets/marketplace.svg";

const page = () => {
  const handleChallengeAnnotation = () => {
    console.log("handleChallengeAnnotation");
  } 
  const handleAnnotateData = () => {
    console.log("handleAnnotateData");
  }
  return (
    <div className="h-screen flex ">
      {/* sidebar */}
      <div className="w-[25%] border-r border-[#98aecd]  max-w-[350px] min-w-[250px] p-2 flex flex-col justify-between ">
        <div>
          <div className="border border-[#98aecd] rounded-lg  p-1">
            <div className="flex items-center gap-2">
              <Image src={profile} className="h-12 w-12 rounded-full" alt="profile" />

              <div className="flex-grow">
                <p className="text-lg font-semibold">Name</p>
                <p className="text-sm text-[#98aecd]">0x123456789</p>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-1">
              <p className="py-1 px-2 text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-md text-[#bcd0ec] hover:text-[#edd346]">
                Pro
              </p>
              <button className="py-1 px-2 text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-md text-[#bcd0ec] hover:text-[#edd346]">
                Upgrade
              </button>
            </div>

            <p className="mt-4 px-2 truncate">
              This is the description of sadfasdfsdf asd fas df asdf asd fa sdf asdf af a
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <Image src={viewJobs} className="h-8 w-8" alt="profile" />
              <p className="text-xl font-semibold">View Jobs</p>
            </div>

            <div className="flex items-center gap-4">
              <Image src={marketPlace} className="h-7 w-7" alt="profile" />
              <p className="text-xl font-semibold relative">
                Marketplace
                <span className="text-sm text-[#edd346] right-[-1em] -top-2 absolute">Beta</span>
              </p>
            </div>
          </div>
        </div>

        <button className="p-2 rounded-md bg-red-500 font-semibold">Logout</button>
      </div>

      <div className="flex-grow">
        <p className="text-center text-lg font-semibold w-full py-2">Profile</p>

        <div className="w-4/5 mx-auto">
          <div className="flex items-center gap-4 md:gap-6">
            <Image src={profile} className="h-24 w-24 rounded-full shadow shadow-white" alt="profile" />
            <div className="flex justify-between items-center w-full ">
              <div>
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">Annotator</p>
                <div className=" flex gap-4">
                  <p className="py-1 px-2 w-fit text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-md text-[#bcd0ec] hover:text-[#edd346]">
                    Pro
                  </p>
                  0x123456789
                </div>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">750</p>
            </div>
          </div>

          <p className="mt-4 md:mt-6">THIS DIDFSSD FASDFSADFASDFS DESCRIPTOTIN FASDFASD FASDFA SFA SD FASD FASDF ADS FA SF ASD FD FS DF SDF AD F ASDFASD FASDFASDFASD ASDFA SDF ASD FASD FA SDF AD FASD FAS DFASDF</p>

          <div className="flex gap-4 mt-10 lg:mt-12">
            <button className="py-2 px-4 border text-lg font-semibold rounded-lg" onClick={()=>handleAnnotateData()}>Annotate Data</button>
            <button className="py-2 px-4 border text-lg font-semibold rounded-lg" onClick={()=>handleChallengeAnnotation()}>Challenge Annotation</button>
          </div>

          <div className="mt-10 lg:mt-12">
            <p className="text-xl w-fit font-semibold md:text-2xl relative ">Jobs
            <span className="flex justify-center items-center border rounded-full text-sm absolute h-7 w-7 -top-1 -right-8 ">10</span>
            </p>

            <div className="">
              <p className="p-2 border-b">Ongoing</p>
              <p>Previous</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default page;
