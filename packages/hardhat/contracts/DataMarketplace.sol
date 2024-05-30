// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataMarketplace {
	enum AnnotatorType {
		Novice,
		Pro,
		Elite,
		Titan
	}
	enum ActionType {
		Pending,
		Discard,
		Approve
	}

	struct Submission {
		uint256 submissionID;
		uint256 jobID;
		address annotator;
		string folderLink;
		uint256 timestamp;
		AnnotatorType annotatorType;
		bool isChallenged;
	}

	struct ChallengedSubmission {
		uint256 challengeID;
		address challenger;
		AnnotatorType challengerType;
		address challenged;
		AnnotatorType challengedType;
		string folderLink;
		uint256 timestamp;
		ActionType outcome;
		bool isResolved;
	}

	struct Job {
		uint256 jobID;
		address postedBy;
		string title;
		string description;
		uint256 rewardPool;
		string rawDataFolderLink;
		AnnotatorType annotatorType;
		address[] annotators;
		uint256[] submissions;
		uint256[] challengedAnnotations;
		bool isActive;
	}

	struct AICompany {
		string name;
		address companyAddress;
		string description;
		uint256[] jobs;
	}

	struct Annotator {
		string name;
		address annotatorAddress;
		string description;
		AnnotatorType annotatorTier;
		uint256 annotatorScore;
		uint256[] challengedSubmissions;
		uint256[] submissions;
		uint256[] jobs;
	}

	Job[] public allAnnotationJobs;
	Annotator[] public allAnnotatorsProfile;
	AICompany[] public allAiCompanyProfiles;

	mapping(address => uint256[]) public addressToJobs;
	mapping(address => AICompany) public addressToAICompany;
	mapping(address => Annotator) public addressToAnnotator;
	mapping(uint256 => Submission[]) public jobToSubmissions;
	mapping(uint256 => ChallengedSubmission[])
		public jobToChallengedSubmissions;

	uint256 public submissionCounter;
	uint256 public challengeCounter;

	modifier onlyAICompany(uint256 _jobID) {
		require(
			allAnnotationJobs[_jobID].postedBy == msg.sender,
			"Only the AI company that posted the job can perform this action."
		);
		_;
	}

	modifier onlyAnnotator(uint256 _jobID) {
		bool isAnnotator = false;
		for (
			uint256 i = 0;
			i < allAnnotationJobs[_jobID].annotators.length;
			i++
		) {
			if (allAnnotationJobs[_jobID].annotators[i] == msg.sender) {
				isAnnotator = true;
				break;
			}
		}
		require(
			isAnnotator,
			"Only annotators assigned to the job can perform this action."
		);
		_;
	}

	/// @notice Creates a new AI company profile
	/// @param _name The name of the AI company
	/// @param _description A description of the AI company
	function createAICompanyProfile(
		string memory _name,
		string memory _description
	) public {
		require(
			bytes(_name).length > 0 && bytes(_description).length > 0,
			"Name and description must not be empty"
		);
		require(
			addressToAnnotator[msg.sender].annotatorAddress == address(0),
			"Address already has an annotator profile"
		);

		allAiCompanyProfiles.push(
			AICompany(_name, msg.sender, _description, new uint256[](0))
		);
		addressToAICompany[msg.sender] = allAiCompanyProfiles[
			allAiCompanyProfiles.length - 1
		];
	}

	/// @notice Creates a new annotator profile
	/// @param _name The name of the annotator
	/// @param _description A description of the annotator
	function createAnnotatorProfile(
		string memory _name,
		string memory _description
	) public {
		require(
			bytes(_name).length > 0 && bytes(_description).length > 0,
			"Name and description must not be empty"
		);
		require(
			addressToAnnotator[msg.sender].annotatorAddress == address(0),
			"Annotator profile already exists"
		);
		require(
			addressToAICompany[msg.sender].companyAddress == address(0),
			"Address already has an AI company profile"
		);
		allAnnotatorsProfile.push(
			Annotator(
				_name,
				msg.sender,
				_description,
				AnnotatorType.Novice,
				750,
				new uint256[](0),
				new uint256[](0),
				new uint256[](0)
			)
		);
		addressToAnnotator[msg.sender] = allAnnotatorsProfile[
			allAnnotatorsProfile.length - 1
		];
	}

	/// @notice Updates the annotator tier of the caller
	/// @param _tier The new annotator tier to be set
	function updateAnnotatorTier(AnnotatorType _tier) public payable {
		Annotator storage annotator = addressToAnnotator[msg.sender];
		require(
			annotator.annotatorAddress != address(0),
			"Annotator profile does not exist"
		);

		uint256 requiredAmount;
		if (_tier == AnnotatorType.Pro) {
			requiredAmount = 10 ether;
		} else if (_tier == AnnotatorType.Elite) {
			requiredAmount = 25 ether;
		} else if (_tier == AnnotatorType.Titan) {
			requiredAmount = 50 ether;
		}

		require(
			msg.value >= requiredAmount,
			"Insufficient amount sent for the requested tier"
		);
		require(
			_tier > annotator.annotatorTier,
			"Can only upgrade to a higher tier"
		);

		// Update the annotator tier in the allAnnotatorsProfile array
		for (uint256 i = 0; i < allAnnotatorsProfile.length; i++) {
			if (allAnnotatorsProfile[i].annotatorAddress == msg.sender) {
				allAnnotatorsProfile[i].annotatorTier = _tier;
				break;
			}
		}

		annotator.annotatorTier = _tier;
	}

	/// @notice Posts a new annotation job
	/// @param _title The title of the job
	/// @param _description A description of the job
	/// @param _rawDataFolderLink The link to the raw data folder
	/// @param _annotatorType The required annotator tier for the job
	function postJob(
		string memory _title,
		string memory _description,
		string memory _rawDataFolderLink,
		AnnotatorType _annotatorType
	) public payable {
		require(
			bytes(_title).length > 0 && bytes(_description).length > 0,
			"Title and description must not be empty"
		);
		require(
			bytes(_rawDataFolderLink).length > 0,
			"Raw data folder link must not be empty"
		);

		uint256 requiredAmount;
		if (_annotatorType == AnnotatorType.Novice) {
			requiredAmount = 10 ether;
		} else if (_annotatorType == AnnotatorType.Pro) {
			requiredAmount = 30 ether;
		} else if (_annotatorType == AnnotatorType.Elite) {
			requiredAmount = 50 ether;
		} else if (_annotatorType == AnnotatorType.Titan) {
			requiredAmount = 100 ether;
		}

		require(
			msg.value >= requiredAmount,
			"Insufficient reward amount for the requested annotator tier"
		);

		uint256 jobId = allAnnotationJobs.length;
		allAnnotationJobs.push(
			Job(
				jobId,
				msg.sender,
				_title,
				_description,
				msg.value,
				_rawDataFolderLink,
				_annotatorType,
				new address[](0),
				new uint256[](0),
				new uint256[](0),
				true
			)
		);

		addressToJobs[msg.sender].push(jobId);

		// Update the jobs array in the allAiCompanyProfiles
		for (uint256 i = 0; i < allAiCompanyProfiles.length; i++) {
			if (allAiCompanyProfiles[i].companyAddress == msg.sender) {
				allAiCompanyProfiles[i].jobs.push(jobId);
				break;
			}
		}
	}

	/// @notice Ends the specified job
	/// @param _jobID The ID of the job to be ended
	function endJob(uint256 _jobID) public onlyAICompany(_jobID) {
		Job storage job = allAnnotationJobs[_jobID];
		job.isActive = false;

		address[] memory defaultedAnnotators = new address[](
			job.annotators.length
		);
		uint256 defaultedAnnotatorsCount = 0;

		for (uint256 i = 0; i < job.annotators.length; i++) {
			bool hasSubmitted = false;
			for (uint256 j = 0; j < job.submissions.length; j++) {
				if (
					jobToSubmissions[_jobID][j].annotator == job.annotators[i]
				) {
					hasSubmitted = true;
					break;
				}
			}
			if (!hasSubmitted) {
				defaultedAnnotators[defaultedAnnotatorsCount] = job.annotators[
					i
				];
				defaultedAnnotatorsCount++;
				addressToAnnotator[job.annotators[i]].annotatorScore -= 10;
			}
		}

		for (uint256 i = 0; i < defaultedAnnotatorsCount; i++) {
			for (
				uint256 j = 0;
				j < addressToAnnotator[defaultedAnnotators[i]].jobs.length;
				j++
			) {
				if (
					addressToAnnotator[defaultedAnnotators[i]].jobs[j] == _jobID
				) {
					addressToAnnotator[defaultedAnnotators[i]].jobs[
							j
						] = addressToAnnotator[defaultedAnnotators[i]].jobs[
						addressToAnnotator[defaultedAnnotators[i]].jobs.length -
							1
					];
					addressToAnnotator[defaultedAnnotators[i]].jobs.pop();
					break;
				}
			}
		}
	}

	/// @notice Distributes the reward for the specified job
	/// @param _jobID The ID of the job for which the reward is to be distributed
	/// @param _annotators An array of addresses of annotators who completed the job
	/// @param _challengers An array of addresses of annotators who successfully challenged submissions
	function distributeReward(
		uint256 _jobID,
		address[] memory _annotators,
		address[] memory _challengers
	) public onlyAICompany(_jobID) {
		Job storage job = allAnnotationJobs[_jobID];
		require(!job.isActive, "Job must be ended before distributing rewards");

		bool allChallengesResolved = true;
		for (uint256 i = 0; i < job.challengedAnnotations.length; i++) {
			if (!jobToChallengedSubmissions[_jobID][i].isResolved) {
				allChallengesResolved = false;
				break;
			}
		}
		require(
			allChallengesResolved,
			"All challenges must be resolved before distributing rewards"
		);

		uint256 annotatorShare;
		uint256 challengerShare;
		if (job.annotatorType == AnnotatorType.Novice) {
			annotatorShare = (job.rewardPool * 80) / 100;
			challengerShare = (job.rewardPool * 20) / 100;
		} else if (job.annotatorType == AnnotatorType.Pro) {
			annotatorShare = (job.rewardPool * 70) / 100;
			challengerShare = (job.rewardPool * 30) / 100;
		} else if (job.annotatorType == AnnotatorType.Elite) {
			annotatorShare = (job.rewardPool * 60) / 100;
			challengerShare = (job.rewardPool * 40) / 100;
		} else {
			annotatorShare = job.rewardPool / 2;
			challengerShare = job.rewardPool / 2;
		}

		uint256 annotatorReward = annotatorShare / _annotators.length;
		uint256 challengerReward = challengerShare / _challengers.length;

		for (uint256 i = 0; i < _annotators.length; i++) {
			payable(_annotators[i]).transfer(annotatorReward);
			addressToAnnotator[_annotators[i]].annotatorScore += 5;
		}

		for (uint256 i = 0; i < _challengers.length; i++) {
			payable(_challengers[i]).transfer(challengerReward);
			addressToAnnotator[_challengers[i]].annotatorScore += 5;
		}

		endJob(_jobID);
	}

	/// @notice Resolves a challenge for the specified job
	/// @param _jobID The ID of the job for which the challenge is to be resolved
	/// @param _challengeID The ID of the challenge to be resolved
	/// @param _action The action to be taken (Discard or Approve)
	function resolveChallenge(
		uint256 _jobID,
		uint256 _challengeID,
		ActionType _action
	) public onlyAICompany(_jobID) {
		require(
			_action == ActionType.Discard || _action == ActionType.Approve,
			"Invalid action type"
		);

		if (_action == ActionType.Discard) {
			discardChallenge(_jobID, _challengeID);
		} else {
			approveChallenge(_jobID, _challengeID);
		}
	}

	function discardChallenge(uint256 _jobID, uint256 _challengeID) private {
		ChallengedSubmission storage challenge = jobToChallengedSubmissions[
			_jobID
		][_challengeID];
		challenge.isResolved = true;
		challenge.outcome = ActionType.Discard;
		addressToAnnotator[challenge.challenger].annotatorScore -= 50;
		addressToAnnotator[challenge.challenged].annotatorScore += 10;
	}

	function approveChallenge(uint256 _jobID, uint256 _challengeID) private {
		ChallengedSubmission storage challenge = jobToChallengedSubmissions[
			_jobID
		][_challengeID];
		challenge.isResolved = true;
		challenge.outcome = ActionType.Approve;
		addressToAnnotator[challenge.challenger].annotatorScore += 10;
		addressToAnnotator[challenge.challenged].annotatorScore -= 25;

		for (
			uint256 i = 0;
			i < allAnnotationJobs[_jobID].submissions.length;
			i++
		) {
			if (
				allAnnotationJobs[_jobID].submissions[i] ==
				challenge.challengeID
			) {
				allAnnotationJobs[_jobID].submissions[i] = allAnnotationJobs[
					_jobID
				].submissions[allAnnotationJobs[_jobID].submissions.length - 1];
				allAnnotationJobs[_jobID].submissions.pop();
				break;
			}
		}

		for (
			uint256 i = 0;
			i < addressToAnnotator[challenge.challenged].submissions.length;
			i++
		) {
			if (
				addressToAnnotator[challenge.challenged].submissions[i] ==
				challenge.challengeID
			) {
				addressToAnnotator[challenge.challenged].submissions[
						i
					] = addressToAnnotator[challenge.challenged].submissions[
					addressToAnnotator[challenge.challenged]
						.submissions
						.length - 1
				];
				addressToAnnotator[challenge.challenged].submissions.pop();
				break;
			}
		}
	}

	function getSubmissions(
		uint256 _jobID,
		uint256[] memory _submissionIDs
	) public view returns (Submission[] memory) {
		Submission[] memory submissions = new Submission[](
			_submissionIDs.length
		);
		for (uint256 i = 0; i < _submissionIDs.length; i++) {
			submissions[i] = jobToSubmissions[_jobID][_submissionIDs[i]];
		}
		return submissions;
	}

	/// @notice Returns challenged submissions for a given job
	/// @param _jobID The ID of the job
	/// @param _challengedSubmissionIDs An array of challenged submission IDs
	/// @return An array of ChallengedSubmission structs
	function getChallengedSubmissions(
		uint256 _jobID,
		uint256[] memory _challengedSubmissionIDs
	) public view returns (ChallengedSubmission[] memory) {
		ChallengedSubmission[]
			memory challengedSubmissions = new ChallengedSubmission[](
				_challengedSubmissionIDs.length
			);
		for (uint256 i = 0; i < _challengedSubmissionIDs.length; i++) {
			challengedSubmissions[i] = jobToChallengedSubmissions[_jobID][
				_challengedSubmissionIDs[i]
			];
		}
		return challengedSubmissions;
	}

	/// @notice Annotates the specified job
	/// @param _jobID The ID of the job to be annotated
	function annotateJob(uint256 _jobID) public {
		Job storage job = allAnnotationJobs[_jobID];
		Annotator storage annotator = addressToAnnotator[msg.sender];

		require(
			annotator.annotatorAddress != address(0),
			"You must have an annotator profile"
		);
		require(job.isActive, "Job must be active to annotate");
		require(
			annotator.annotatorTier >= job.annotatorType,
			"Annotator tier must be equal or higher than job tier"
		);
		require(
			annotator.annotatorScore >= 700,
			"Annotator score must be at least 700"
		);

		bool isAlreadyAnnotator = false;
		for (uint256 i = 0; i < job.annotators.length; i++) {
			if (job.annotators[i] == msg.sender) {
				isAlreadyAnnotator = true;
				break;
			}
		}
		require(
			!isAlreadyAnnotator,
			"You are already an annotator for this job"
		);
		job.annotators.push(msg.sender);
		annotator.jobs.push(_jobID);
	}

	/// @notice Completes the annotation for the specified job
	/// @param _jobID The ID of the job for which the annotation is being completed
	/// @param _folderLink The link to the folder containing the annotated data
	function completeAnnotation(
		uint256 _jobID,
		string memory _folderLink
	) public onlyAnnotator(_jobID) {
		Job storage job = allAnnotationJobs[_jobID];
		Annotator storage annotator = addressToAnnotator[msg.sender];

		require(bytes(_folderLink).length > 0, "Folder link must not be empty");

		for (uint256 i = 0; i < job.submissions.length; i++) {
			if (jobToSubmissions[_jobID][i].annotator == msg.sender) {
				revert("You have already submitted for this job");
			}
		}

		submissionCounter++;
		job.submissions.push(submissionCounter);
		annotator.submissions.push(submissionCounter);
		jobToSubmissions[_jobID].push(
			Submission(
				submissionCounter,
				_jobID,
				msg.sender,
				_folderLink,
				block.timestamp,
				annotator.annotatorTier,
				false
			)
		);
	}

	/// @notice Challenges an annotation submission for the specified job
	/// @param _jobID The ID of the job for which the annotation is being challenged
	/// @param _submissionID The ID of the submission being challenged
	function challengeAnnotation(uint256 _jobID, uint256 _submissionID) public {
		Job storage job = allAnnotationJobs[_jobID];
		Annotator storage annotator = addressToAnnotator[msg.sender];
		Submission storage submission = jobToSubmissions[_jobID][_submissionID];

		require(
			annotator.annotatorTier > submission.annotatorType,
			"Challenger tier must be higher than submission tier"
		);
		require(
			msg.sender != submission.annotator,
			"You cannot challenge your own submission"
		);
		challengeCounter++;
		job.challengedAnnotations.push(challengeCounter);
		annotator.challengedSubmissions.push(challengeCounter);
		jobToChallengedSubmissions[_jobID].push(
			ChallengedSubmission(
				challengeCounter,
				msg.sender,
				annotator.annotatorTier,
				submission.annotator,
				submission.annotatorType,
				submission.folderLink,
				block.timestamp,
				ActionType.Pending,
				false
			)
		);
		submission.isChallenged = true;
	}

	/// @notice Returns all annotator profiles
	/// @return An array of Annotator structs containing all annotator profiles
	function getAllAnnotatorProfiles()
		public
		view
		returns (Annotator[] memory)
	{
		return allAnnotatorsProfile;
	}

	/// @notice Returns all AI company profiles
	/// @return An array of AICompany structs containing all AI company profiles
	function getAllAICompanyProfiles()
		public
		view
		returns (AICompany[] memory)
	{
		return allAiCompanyProfiles;
	}

	/// @notice Returns all annotation jobs
	/// @return An array of Job structs containing all annotation jobs
	function getAllJobs() public view returns (Job[] memory) {
		return allAnnotationJobs;
	}
}
