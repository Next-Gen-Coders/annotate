import { Input } from "~~/components/@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~~/components/@/components/ui/select";
import { Textarea } from "~~/components/@/components/ui/textarea";

export default function page() {
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
                placeholder="xyz.com/upload/files"
              />
            </div>
            <div className="mb-4">
              <p className="block font-semibold py-2">
                Annotator Type
              </p>
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
              <p className="block font-semibold py-2">
                Reward Pool
              </p>
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
