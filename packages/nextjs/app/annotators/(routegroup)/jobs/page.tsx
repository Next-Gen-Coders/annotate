import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/@/components/ui/tabs";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("name");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur earum iusto libero cum quo expedita corrupti dolor quis. Culpa voluptas iste placeat voluptate eligendi impedit corporis libero commodi adipisci!"
  );

  return (
    <div className="mt-10 lg:mt-12 w-11/12 max-w-screen-xl px-10">
      <p className="text-xl font-semibold md:text-2xl relative ">Job</p>
      <Tabs defaultValue="novice" className="w-full">
        <TabsList>
          <TabsTrigger value="novice" className="">
            Novice
          </TabsTrigger>
          <TabsTrigger value="pro">Pro</TabsTrigger>
          <TabsTrigger value="elite">Elite</TabsTrigger>
          <TabsTrigger value="titan">Titan</TabsTrigger>
        </TabsList>
        <TabsContent value="novice">
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">{name}</h5>
                <p className="w-11/12">{description}</p>
              </div>
              <Link href={"/annotators/jobs/1"} className="py-1 px-4 h-fit border rounded-xl">Annotate</Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="pro">
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">{name}</h5>
                <p className="w-11/12">{description}</p>
              </div>
              <Link href={"/annotators/jobs/1"} className="py-1 px-4 h-fit border rounded-xl">Annotate</Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="elite">
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">{name}</h5>
                <p className="w-11/12">{description}</p>
              </div>
              <Link href={"/annotators/jobs/1"} className="py-1 px-4 h-fit border rounded-xl">Annotate</Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="titan">
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">{name}</h5>
                <p className="w-11/12">{description}</p>
              </div>
              <Link href={"/annotators/jobs/1"} className="py-1 px-4 h-fit border rounded-xl">Annotate</Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
