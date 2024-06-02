"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/@/components/ui/tabs";

export default function Page() {
  const [name, setName] = useState("name");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur earum iusto libero cum quo expedita corrupti dolor quis. Culpa voluptas iste placeat voluptate eligendi impedit corporis libero commodi adipisci!",
  );

  return (
    <div className="mt-10 lg:mt-12 w-11/12 max-w-screen-xl px-10">
      <p className="text-xl font-semibold md:text-2xl relative ">Jobs</p>
      <Tabs defaultValue="novice" className="w-full">
        <TabsList className="flex w-fit gap-x-6 py-8 pb-14">
          <TabsTrigger
            value="novice"
            className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
          >
            Novice
          </TabsTrigger>
          <TabsTrigger
            value="pro"
            className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
          >
            Pro
          </TabsTrigger>
          <TabsTrigger
            value="elite"
            className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
          >
            Elite
          </TabsTrigger>
          <TabsTrigger
            value="titan"
            className="text-lg font-normal data-[state=active]:border-b text-[#aabacf] data-[state=active]:text-white border-[#aabacf]"
          >
            Titan
          </TabsTrigger>
        </TabsList>
        <TabsContent value="novice">
          <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-xl font-semibold">{name}</h5>
                <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-3xl">{description}</p>
              </div>
              <Link
                href={"/annotators/jobs/1"}
                className="py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
              >
                Annotate
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="pro">
          {" "}
          <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-xl font-semibold">{name}</h5>
                <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-3xl">{description}</p>
              </div>
              <Link
                href={"/annotators/jobs/1"}
                className="py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
              >
                Annotate
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="elite">
          {" "}
          <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-xl font-semibold">{name}</h5>
                <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-3xl">{description}</p>
              </div>
              <Link
                href={"/annotators/jobs/1"}
                className="py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
              >
                Annotate
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="titan">
          {" "}
          <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6  bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-xl font-semibold">{description}</h5>
                <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-3xl">{description}</p>
              </div>
              <Link
                href={"/annotators/jobs/1"}
                className="py-2 px-4 h-fit bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-[10px]"
              >
                Annotate
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
