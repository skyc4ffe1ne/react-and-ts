import z from "zod";
import { applicationStatus, applicationWork, applicationCompanyIndustry } from "@/lib/data"


const applicationWorkSchema = z.enum(applicationWork)
const applicationStatusSchema = z.enum(applicationStatus)
const applicationCompanyIndustrySchema = z.enum(applicationCompanyIndustry)

export type ApplicationWorkType = z.infer<typeof applicationWorkSchema>
export type ApplicationStatus = z.infer<typeof applicationStatusSchema>
export type ApplicationCompanyIndustry = z.infer<typeof applicationCompanyIndustrySchema>

export const applicationSchema = z.object({
	companyName: z.string().trim().min(1, "Company name required"),
	companyIndustry: applicationCompanyIndustrySchema,
	companyLocation: z.string().trim().min(1, ""),
	position: z.string().trim().min(1, ""),
	applicationDate: z.date(),
	workType: applicationWorkSchema,
	applicationStatus: applicationStatusSchema
});

export type ApplicationType = z.infer<typeof applicationSchema>;

