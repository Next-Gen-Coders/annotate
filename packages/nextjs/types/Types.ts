export type Job = {
  jobID: bigint;
  postedBy: string;
  title: string;
  description: string;
  rewardPool: bigint;
  rawDataFolderLink: string;
  annotatorType: number;
  annotators: readonly string[]; // Changed from string[]
  submissions: readonly bigint[];
  challengedAnnotations: readonly bigint[];
  isActive: boolean;
};

export type AiCompanyProfile = {
  name: string;
  companyAddress: string;
  description: string;
  jobs: readonly bigint[];
};

export type AnnotatorProfile = {
  name: string;
  annotatorAddress: string;
  description: string;
  annotatorTier: number;
  annotatorScore: bigint;
  challengedSubmissions: readonly bigint[];
  submissions: readonly bigint[];
  jobs: readonly bigint[];
};
