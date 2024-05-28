/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    DataMarketplace: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "addressToAnnotator",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "address",
              name: "annotatorAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "annotatorTier",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "annotatorScore",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "addressToJobs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "allAiCompanyProfiles",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "address",
              name: "companyAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "allAnnotationJobs",
          outputs: [
            {
              internalType: "uint256",
              name: "jobID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "postedBy",
              type: "address",
            },
            {
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "rewardPool",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "rawDataFolderLink",
              type: "string",
            },
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "annotatorType",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "allAnnotatorsProfile",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "address",
              name: "annotatorAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "annotatorTier",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "annotatorScore",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_jobID",
              type: "uint256",
            },
          ],
          name: "annotateJob",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_jobID",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_submissionID",
              type: "uint256",
            },
          ],
          name: "challengeAnnotation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "challengeCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_jobID",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_folderLink",
              type: "string",
            },
          ],
          name: "completeAnnotation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
          ],
          name: "createAICompanyProfile",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
          ],
          name: "createAnnotatorProfile",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_jobID",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "_annotators",
              type: "address[]",
            },
            {
              internalType: "address[]",
              name: "_challengers",
              type: "address[]",
            },
          ],
          name: "distributeReward",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_jobID",
              type: "uint256",
            },
          ],
          name: "endJob",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "jobToChallengedSubmissions",
          outputs: [
            {
              internalType: "uint256",
              name: "challengeID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "challenger",
              type: "address",
            },
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "challengerType",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "challenged",
              type: "address",
            },
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "challengedType",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "folderLink",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
            {
              internalType: "enum DataMarketplace.ActionType",
              name: "outcome",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "isResolved",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "jobToSubmissions",
          outputs: [
            {
              internalType: "uint256",
              name: "submissionID",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "jobId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "annotator",
              type: "address",
            },
            {
              internalType: "string",
              name: "folderLink",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "annotatorType",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "isChallenged",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_title",
              type: "string",
            },
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "string",
              name: "_rawDataFolderLink",
              type: "string",
            },
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "_annotatorType",
              type: "uint8",
            },
          ],
          name: "postJob",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_jobID",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_challengeID",
              type: "uint256",
            },
            {
              internalType: "enum DataMarketplace.ActionType",
              name: "_action",
              type: "uint8",
            },
          ],
          name: "resolveChallenge",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "submissionCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum DataMarketplace.AnnotatorType",
              name: "_tier",
              type: "uint8",
            },
          ],
          name: "updateAnnotatorTier",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
