export default function page() {
  return (
    <div className="w-11/12 max-w-screen-md mx-auto py-4">
      <div className="flex flex-col items-center">
        <h5 className="text-lg ">Post a job and describe about the job and its requirements.</h5>
        <div className="w-full mx-auto p-6 rounded-lg shadow-lg text-white">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="w-full px-3 py-2 bg-transparent leading-tight border rounded focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 bg-transparent leading-tight border rounded focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="raw-data">
                Raw Data
              </label>
              <div className="border-dashed border-2 border-gray-400 py-12 flex justify-center items-center rounded">
                <span className="text-gray-500">+ Upload Folder</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="annotator-type">
                Annotator Type
              </label>
              <select
                className="w-full px-3 py-2 bg-transparent leading-tight border rounded focus:outline-none focus:shadow-outline"
                id="annotator-type"
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
