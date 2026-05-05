import { z } from "zod";

export const memberSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  role: z.enum(["OWNER", "MEMBER"], {
    message: "Please select a valid role",
  }),
});

export type MemberFormValues = z.infer<typeof memberSchema>;
