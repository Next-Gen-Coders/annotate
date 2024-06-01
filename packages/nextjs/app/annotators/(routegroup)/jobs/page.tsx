import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/@/components/ui/tabs";

export default function page() {
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
                <h5 className="text-2xl font-semibold">name</h5>
                <p className="w-11/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur earum iusto libero cum quo
                  expedita corrupti dolor quis. Culpa voluptas iste placeat voluptate eligendi impedit corporis libero
                  commodi adipisci!
                </p>
              </div>
              <button className="py-1 px-4 h-fit border rounded-xl">Annotate</button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="pro">
          {" "}
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">name</h5>
                <p className="w-11/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur earum iusto libero cum quo
                  expedita corrupti dolor quis. Culpa voluptas iste placeat voluptate eligendi impedit corporis libero
                  commodi adipisci!
                </p>
              </div>
              <button className="py-1 px-4 h-fit border rounded-xl">Annotate</button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="elite">
          {" "}
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">name</h5>
                <p className="w-11/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur earum iusto libero cum quo
                  expedita corrupti dolor quis. Culpa voluptas iste placeat voluptate eligendi impedit corporis libero
                  commodi adipisci!
                </p>
              </div>
              <button className="py-1 px-4 h-fit border rounded-xl">Annotate</button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="titan">
          {" "}
          <div className="flex flex-col gap-y-4">
            <div className="p-4 border border-[#98aecd] rounded-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h5 className="text-2xl font-semibold">name</h5>
                <p className="w-11/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur earum iusto libero cum quo
                  expedita corrupti dolor quis. Culpa voluptas iste placeat voluptate eligendi impedit corporis libero
                  commodi adipisci!
                </p>
              </div>
              <button className="py-1 px-4 h-fit border rounded-xl">Annotate</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
