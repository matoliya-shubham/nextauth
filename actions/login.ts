"use server";
// Server Actions (all spi call related files will be here) this code will never bundeled with client side code
// These server action functions is called inside server components
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  return { success: "Email Sent!" };
};
