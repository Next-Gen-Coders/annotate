import Link from "next/link";
import { View } from "lucide-react";
import { Job } from "~~/types/Types";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="border border-[#98aecd] rounded-[10px] px-3 py-6 bg-[#98aecd] bg-opacity-10 flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-1">
          <h5 className="text-xl font-semibold">{job.title}</h5>
          <p className="text-sm text-white opacity-70 line-clamp-3 w-11/12 max-w-2xl">{job.description}</p>
        </div>
        <Link href={`/ai-company/jobs/${job.jobID}`}>
          <View className="" />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
