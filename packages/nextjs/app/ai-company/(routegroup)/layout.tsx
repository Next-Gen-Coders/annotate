import Image from "next/image";
import Link from "next/link";
import profile from "../../../assets/Pepe.jpeg";
import marketPlace from "../../assets/marketplace.svg";
import { Store, View } from "lucide-react";

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      <div className="w-[25%] border-r border-[#98aecd]  max-w-[350px] min-w-[250px] p-2 flex flex-col justify-between ">
        <div>
          <Link href="/ai-company">
            <div className="border border-[#98aecd] rounded-xl  px-3 py-2">
              <div className="flex items-center gap-2">
                <Image src={profile} className="h-12 w-12 rounded-full" alt="profile" />

                <div className="flex-grow">
                  <p className="text-lg font-semibold">Name</p>
                  <p className="text-sm text-[#98aecd]">0x123456789</p>
                </div>
              </div>

              <p className="mt-4 px-2 truncate">
                This is the description of sadfasdfsdf asd fas df asdf asd fa sdf asdf af a
              </p>
              <div className="flex justify-end gap-2 mt-1">
                <p className="py-1 rounded-[6px] px-2 text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200  text-[#bcd0ec] hover:text-[#edd346]">
                  Pro
                </p>
                <button className="py-1 px-2 text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[6px] text-[#bcd0ec] hover:text-[#edd346]">
                  Upgrade
                </button>
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-4 mt-8">
            <Link href="/ai-company/post-job" className="flex items-center gap-4">
              <Image src="/square-pen.svg" width={200} height={200} className="size-6" alt="upload" />

              <p className="text-xl font-semibold">Post a Job</p>
            </Link>
            <Link href="/ai-company/view-jobs" className="flex items-center gap-4">
              <View />

              <p className="text-xl font-semibold">View Jobs</p>
            </Link>

            <Link href="/ai-company" className="flex items-center gap-4">
              <Store />
              <p className="text-xl font-semibold relative">
                Marketplace
                <span className="text-sm text-[#edd346] right-[-1em] -top-3 absolute">Beta</span>
              </p>
            </Link>
          </div>
        </div>

        <button className="p-2 rounded-[10px] bg-red-500 font-semibold">Logout</button>
      </div>
      {children}
    </div>
  );
};

export default ScaffoldEthApp;
