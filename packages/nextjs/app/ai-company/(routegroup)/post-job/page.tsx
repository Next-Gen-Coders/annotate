"use client";

import { useState } from "react";
import { Input } from "~~/components/@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~~/components/@/components/ui/select";
import { Textarea } from "~~/components/@/components/ui/textarea";

export default function Page() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rawData, setRawData] = useState<File | null>(null);
  const [rawDataLink, setRawDataLink] = useState<string>("");
  const [annotatorType, setAnnotatorType] = useState<string>("");
  const [rewardPool, setRewardPool] = useState<string>("");

  const handlePost = () => {
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Raw Data:", rawData);
    console.log("Annotator Type:", annotatorType);
    console.log("Reward Pool:", rewardPool);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setRawData(e.target.files[0]);
    } else {
      setRawData(null);
    }
  };

  return (
    <div className="w-11/12 max-w-screen-md mx-auto py-16">
      <div className="flex flex-col items-center">
        <h5 className="text-2xl pb-4">Post a job and describe about the job and its requirements.</h5>
        <div className="w-full mx-auto p-6 rounded-lg shadow-lg text-white">
          <form>
            <div className="mb-4">
              <label className="block font-semibold py-2" htmlFor="title">
                Title
              </label>
              <Input
                className="border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10 focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold py-2" htmlFor="description">
                Description
              </label>
              <Textarea
                className="border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10 focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold py-2" htmlFor="raw-data">
                Raw Data
              </label>
              <Input
                type="file"
                className="border border-[#98aecd] rounded-[10px]  px-3 py-14  bg-[#98aecd] bg-opacity-10 flex justify-center items-center"
                placeholder="+ Upload Folder"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold py-2" htmlFor="title">
                Raw Data Link
              </label>
              <Input
                className="border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10 focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={rawDataLink}
                onChange={e => setRawDataLink(e.target.value)}
                placeholder="xyz.com/upload/files"
              />
            </div>
            <div className="mb-4">
              <p className="block font-semibold py-2">Annotator Type</p>
              <Select>
                <SelectTrigger className="w-full border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="bg-[#161928] rounded-xl">
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <p className="block font-semibold py-2">Reward Pool</p>
              <Select>
                <SelectTrigger className="w-full border border-[#98aecd] rounded-[10px]  px-3 py-4  bg-[#98aecd] bg-opacity-10">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="bg-[#161928] rounded-xl">
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-center w-full py-6">
              <button
                className="py-2 px-4 w-full border bg-[#466ded] border-[#466ded] text-[#466ded] btn-shadow  bg-opacity-15 hover:bg-opacity-20 duration-200 rounded-[10px]"
                type="button"
                onClick={handlePost}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
