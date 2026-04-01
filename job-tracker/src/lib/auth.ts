import z from "zod";

export const signUpSchema = z.object({
  email: z.email("Please provide a right email").trim().min(1, "Email required"),
  username: z.string().trim().min(1, "Username required"),
  password: z.string().trim().min(1, "Password Required").min(8, "Minimun 8 characters"),
});

export const signInSchema = z.object({
  email: z.email("Please provide a right email").trim().min(1, "Email required"),
  password: z.string().trim().min(1, "Password Required").min(8, "Minimun 8 characters"),
});

export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
