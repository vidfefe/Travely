"use client";

import React, { useActionState } from "react";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { login } from "@/lib/actions";
import { LoginFormState } from "@/types/forms.types";
import { initialState } from "./RegisterForm";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const [state, formAction, pending] = useActionState<LoginFormState, FormData>(
    async (prevState, formData) => {
      const result = await login(prevState, formData);

      if (result?.message) {
        toast.error(result.message);
      }

      return result;
    },
    initialState
  );

  return (
    <form
      action={formAction}
      className="w-[400px] bg-white rounded-lg px-3 py-7 flex flex-col items-center justify-center gap-3"
    >
      <h2 className=" text-2xl font-bold text-blue-950">Login</h2>
      <div>
        <Input
          name="email"
          type="email"
          defaultValue={state.values?.email}
          placeholder="Email"
        />
        {state.errors.email && (
          <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>
        )}
      </div>
      <div>
        <Input
          name="password"
          type="password"
          defaultValue={state.values?.password}
          placeholder="Password"
        />
        {state.errors.password && (
          <p className="text-sm text-red-500 mt-1">
            {state.errors.password[0]}
          </p>
        )}
      </div>
      <Button disabled={pending} type="submit">
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
};
