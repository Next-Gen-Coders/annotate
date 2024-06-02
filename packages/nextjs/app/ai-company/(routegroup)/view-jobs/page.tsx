import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/@/components/ui/tabs";
import { View } from "lucide-react";

export default function page() {
  return (
    <div className="py-10 w-11/12 max-w-screen-xl px-10">
      <p className="text-3xl font-medium relative px-1 pb-6">
        Jobs
        {/* <span className="flex justify-center items-center border rounded-full text-sm absolute h-7 w-7 -top-1 -right-8 ">
                10
              </span> */}
      </p>
      <Tabs defaultValue="Ongoing" className="w-full">
        <TabsList className="flex w-fit gap-x-6 py-8 pb-14">
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
          <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6 bg-opacity-10 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-xl font-semibold  ">Job Title</h5>
                <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nesciunt, eos corporis inventore
                  recusandae quibusdam minima ipsam, non quaerat quidem iste nulla eligendi in saepe optio consequatur
                  modi quis! Magnam.
                </p>
              </div>
              <Link href="/ai-company/jobs">
                <View className="" />
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Previous">
        <div className="border border-[#98aecd] rounded-[10px]  px-3 py-6 bg-opacity-10 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h5 className="text-xl font-semibold  ">Job Title</h5>
                <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nesciunt, eos corporis inventore
                  recusandae quibusdam minima ipsam, non quaerat quidem iste nulla eligendi in saepe optio consequatur
                  modi quis! Magnam.
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
  );
}
