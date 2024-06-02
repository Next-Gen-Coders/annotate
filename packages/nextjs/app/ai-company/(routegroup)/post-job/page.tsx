import { useState } from "react";
import { Input } from "~~/components/@/components/ui/input";
import { Textarea } from "~~/components/@/components/ui/textarea";

export default function Page() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rawData, setRawData] = useState<File | null>(null);
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
    <div className="w-11/12 max-w-screen-md mx-auto py-4">
      <div className="flex flex-col items-center">
        <h5 className="text-lg">Post a job and describe the job and its requirements.</h5>
        <div className="w-full mx-auto p-6 rounded-lg shadow-lg text-white">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <Input
                className="w-full px-3 py-2 bg-transparent leading-tight border rounded focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <Textarea
                className="w-full px-3 py-2 bg-transparent leading-tight border rounded focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="raw-data">
                Raw Data
              </label>
              <Input
                type="file"
                className="border-dashed border-2 text-center border-gray-400 py-12 flex justify-center items-center rounded"
                placeholder="+ Upload Folder"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="annotator-type">
                Annotator Type
              </label>
              <select
                className="w-full px-3 py-2 bg-transparent leading-tight border rounded focus:outline-none focus:shadow-outline"
                id="annotator-type"
                value={annotatorType}
                onChange={(e) => setAnnotatorType(e.target.value)}
              >
                <option value="">Select Annotator Type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="reward-pool">
                Reward Pool
              </label>
              <select
                className="w-full px-3 py-2 bg-transparent leading-tight border rounded focus:outline-none focus:shadow-outline"
                id="reward-pool"
                value={rewardPool}
                onChange={(e) => setRewardPool(e.target.value)}
              >
                <option value="">Select Reward Pool</option>
                <option value="pool1">Pool 1</option>
                <option value="pool2">Pool 2</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
