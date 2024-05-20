import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function page() {
  return (
    <div className="flex flex-col gap-y-4 w-full p-4 mx-auto">
      <h6 className="text-4xl font-medium">Jobs</h6>

      <section className="w-full py-6">
        <div className="">
          <Tabs className="w-full" defaultValue="newbie">
            <TabsList className="flex justify-start gap-x-20 border-b py-4">
              <TabsTrigger value="newbie">Newbie</TabsTrigger>
              <TabsTrigger value="learner">Learner</TabsTrigger>
              <TabsTrigger value="pro">Pro</TabsTrigger>
              <TabsTrigger value="elite">Elite</TabsTrigger>
            </TabsList>
            <TabsContent className="my-5" value="newbie">
              <div className="p-4 border rounded-2xl flex items-center justify-between">
                <div className="">
                  <div>Name</div>
                  <p className=" max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum suscipit quam repudiandae
                    incidunt repellendus, quo quibusdam blanditiis consectetur ea veniam odit doloribus dolorem mollitia
                    voluptatum error! Eligendi, possimus voluptate.
                  </p>
                </div>
                <div className="w-fit">
                  <button className="border p-2.5 px-10 rounded-[8px]">Annotate</button>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="my-5" value="learner">
              <div className="p-4 border rounded-2xl flex items-center justify-between">
                <div className="">
                  <div>Name</div>
                  <p className=" max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum suscipit quam repudiandae
                    incidunt repellendus, quo quibusdam blanditiis consectetur ea veniam odit doloribus dolorem mollitia
                    voluptatum error! Eligendi, possimus voluptate.
                  </p>
                </div>
                <div className="w-fit">
                  <button className="border p-2.5 px-10 rounded-[8px]">Annotate</button>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="my-5" value="pro">
              <div className="p-4 border rounded-2xl flex items-center justify-between">
                <div className="">
                  <div>Name</div>
                  <p className=" max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum suscipit quam repudiandae
                    incidunt repellendus, quo quibusdam blanditiis consectetur ea veniam odit doloribus dolorem mollitia
                    voluptatum error! Eligendi, possimus voluptate.
                  </p>
                </div>
                <div className="w-fit">
                  <button className="border p-2.5 px-10 rounded-[8px]">Annotate</button>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="my-5" value="elite">
              <div className="p-4 border rounded-2xl flex items-center justify-between">
                <div className="">
                  <div>Name</div>
                  <p className=" max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum suscipit quam repudiandae
                    incidunt repellendus, quo quibusdam blanditiis consectetur ea veniam odit doloribus dolorem mollitia
                    voluptatum error! Eligendi, possimus voluptate.
                  </p>
                </div>
                <div className="w-fit">
                  <button className="border p-2.5 px-10 rounded-[8px]">Annotate</button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
