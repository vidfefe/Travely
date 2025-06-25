"use server";

import { redirect } from "next/navigation";
import { loginSchema, registerSchema } from "./shemas";
import { signIn } from "./auth";
import { AuthError } from "next-auth";

export async function login(_prevState: unknown, formData: FormData) {
  const values = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };
  const result = loginSchema.safeParse(values);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: null,
      values,
    };
  }
  try {
    await signIn("credentials", {
      ...result.data,
      redirectTo: "/",
    });
    return {
      errors: {},
      message: null,
      values,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            errors: {},
            message: "Invalid email or password",
            values,
          };
        default:
          return {
            errors: {},
            message: "Something went wrong",
            values,
          };
      }
    }
    throw error;
  }
}

export async function register(_prevState: unknown, formData: FormData) {
  const values = {
    username: formData.get("username")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };

  const result = registerSchema.safeParse(values);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: null,
      values,
    };
  }

  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result.data),
  });

  const dataResponse = await res.json();

  if (!res.ok) {
    return {
      errors: {},
      message: dataResponse.error || "Something went wrong",
      values,
    };
  }

  redirect("/login");
}
