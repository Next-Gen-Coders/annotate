import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../../../assets/Pepe.jpeg';
import { Store, View } from 'lucide-react';

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('Name');
  const [walletAddress, setWalletAddress] = useState('0x123456789');
  const [description, setDescription] = useState('This is the description of sadfasdfsdf asd fas df asdf asd fa sdf asdf af a');

  const handleLogout = () => {
    console.log('Logout function triggered');
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-[25%] border-r border-[#98aecd] max-w-[350px] min-w-[250px] p-2 flex flex-col justify-between">
        <div>
          <Link href="/ai-company" className="radial-bg">
            <div className="border border-[#98aecd] rounded-[10px] px-3 py-2 bg-[#98aecd] bg-opacity-10">
              <div className="flex items-center gap-2 pb-2">
                <Image src={profile} className="h-12 w-12 rounded-full" alt="profile" />

                <div className="flex-grow">
                  <p className="text-lg font-semibold">{name}</p>
                  <p className="text-sm text-[#98aecd]">{walletAddress}</p>
                </div>
                <p className="py-1 rounded-[6px] px-2 text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 text-[#bcd0ec] hover:text-[#edd346]">
                  Pro
                </p>
              </div>
              <div className="pt-2">
                <p className="px-2 line-clamp-2 text-sm opacity-80">
                  {description}
                </p>
              </div>
              {/* <div className="flex gap-2 py-2">
                <button className="py-1 px-2 text-sm border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-[6px] text-[#bcd0ec] hover:text-[#edd346]">
                  Upgrade
                </button>
              </div> */}
            </div>
          </Link>
          <div className="flex flex-col gap-6 mt-8">
            <Link href="/ai-company/post-job" className="flex items-center gap-4">
              <Image src="/square-pen.svg" width={200} height={200} className="size-5" alt="upload" />
              <p className="text-xl">Post a Job</p>
            </Link>
            <Link href="/ai-company/view-jobs" className="flex items-center gap-4">
              <View className="size-5" />
              <p className="text-xl">View Jobs</p>
            </Link>
            <Link href="/ai-company" className="flex items-center gap-4">
              <Store className="size-5" />
              <p className="text-xl relative">
                Marketplace
                <span className="text-sm text-[#edd346] right-[-1em] -top-3 absolute">Beta</span>
              </p>
            </Link>
          </div>
        </div>
        <button
          className="py-1 rounded-[6px] px-2 text-sm border border-[#ecbcbc] bg-[#ecbcbc] bg-opacity-20 hover:bg-opacity-20 duration-200 text-[#ecbcbc]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
};

export default ScaffoldEthApp;
