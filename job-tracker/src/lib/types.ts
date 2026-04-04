export type ApplicationStatus =
  | "applied"
  | "accepted"
  | "rejected";

export type ApplicationWorkType = "remote" | "hybrid" | "onsite";

export interface JobApplication {
	id: string;
	companyName: string;
	position: string;
	companyLocation: string;
	companyIndustry: string;
	applicationDate: string;
	workType: ApplicationWorkType;
	status: ApplicationStatus;
	isPinned: boolean;
}
