import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(120),
  email: z.string().email("Enter a valid email."),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service."),
  budget: z.string().min(1, "Select a budget range."),
  message: z.string().min(20, "Tell us a bit more (at least 20 characters).").max(5000),
  referral: z.string().min(1, "Let us know how you found us."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
