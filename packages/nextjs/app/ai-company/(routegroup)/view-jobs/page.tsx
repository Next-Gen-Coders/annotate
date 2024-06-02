import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/@/components/ui/tabs";

export default function page() {
const handleOngoingJob = () =>{
  console.log("View ongoing")
}

const handlePreviousJob = () =>{
  console.log("View ongoing")
}

  return (
    <div className="mt-10 lg:mt-12 w-11/12 max-w-screen-xl px-10">
      <p className="text-xl font-semibold md:text-2xl relative ">Job</p>
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
              <button onClick={()=>handleOngoingJob()} className="p-1 px-4 border rounded-xl">View</button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Previous">
          {" "}
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex justify-between">
              <h5 className="text-lg">Previous Job Title</h5>
              <button onClick={()=>handlePreviousJob()}  className="p-1 px-4 border rounded-xl">View</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
