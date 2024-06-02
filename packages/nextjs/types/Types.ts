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
