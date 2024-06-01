import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/@/components/ui/tabs";

export default function page() {
  return (
    <div className="w-11/12 max-w-screen-lg px-2 mx-auto py-8">
      <div className="flex flex-col gap-y-6">
        <div className="flex justify-between items-center">
          <h5 className="text-4xl font-semibold">JOB 1</h5>
          <button className="py-1 px-4 h-fit border rounded-xl">Annotate</button>
        </div>
        <div className="flex justify-between w-1/2 items-center h-8 ">
          <p>Reward: 100 Matic</p>
          <div className="h-8 w-0.5 bg-white" />
          <p>Annotator: Pro</p>
        </div>
        <p className="max-w-4xl">
          Desc: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae non, quaerat soluta commodi
          repellendus porro debitis atque tempore nulla beatae, voluptatibus dicta omnis iste voluptatum sunt numquam
          aperiam error.
        </p>
        <button className="py-1 px-4 h-fit border rounded-xl w-fit">Open Annotator</button>
        <button className="py-1 px-4 h-fit border rounded-xl w-fit">Download Raw Data</button>
      </div>
      <Tabs defaultValue="annootators" className="w-full">
        <TabsList>
          <TabsTrigger value="annootators" className="">
            Annotators
          </TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>
        <TabsContent value="annootators">
          <div className="flex flex-col justify-center gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="size-8 bg-white rounded-full" />
                <div>
                  <h5 className="text-2xl font-semibold">name</h5>
                  <p className="w-11/12">0x123456789</p>
                </div>
              </div>
              <button className="py-1 px-4 h-fit border rounded-xl">View</button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="submissions">
          {" "}
          <div className="flex flex-col justify-center gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="size-8 bg-white rounded-full" />
                <div>
                  <h5 className="text-2xl font-semibold">name</h5>
                  <p className="w-11/12">0x123456789</p>
                </div>
              </div>
              <button className="py-1 px-4 h-fit border rounded-xl">View</button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="challenges">
          {" "}
          <div className="flex flex-col justify-center gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex gap-x-6 items-center justify-between w-fit">
              <div className="flex items-center gap-x-4">
                <div className="size-8 bg-white rounded-full" />
                <div>
                  <h5 className="text-2xl font-semibold">name</h5>
                  <p className="w-11/12">0x123456789</p>
                </div>
              </div>
              x
              <div className="flex items-center gap-x-4">
                <div className="size-8 bg-white rounded-full" />
                <div>
                  <h5 className="text-2xl font-semibold">name</h5>
                  <p className="w-11/12">0x123456789</p>
                </div>
              </div>
              <button className="py-1 px-4 h-fit border rounded-xl">View</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
