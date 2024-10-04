import { z } from "zod";

// yaha string islye bnaya kyuki ek username check karna h bs
export const userNameValidation = z
  .string()
  .min(2, "username must be atleast 2 characters")
  .max(20, "username must be no more than 20")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character");

//yaha object islye bnaya kyuki 3 4 chize check karni h
export const signUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "inavlid mail address" }),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 characters" }),
});
