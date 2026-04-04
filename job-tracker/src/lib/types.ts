import type { ApplicationStatus, ApplicationWorkType, ApplicationCompanyIndustry } from "@/lib/validation"

export interface JobApplication {
	id: string;
	companyName: string;
	position: string;
	companyLocation: string;
	companyIndustry: ApplicationCompanyIndustry;
	applicationDate: Date;
	workType: ApplicationWorkType;
	status: ApplicationStatus;
	isPinned: boolean;
}
