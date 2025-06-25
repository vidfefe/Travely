"use client";

import React from "react";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { register } from "@/lib/actions";
import { RegisterFormState } from "../../types/forms.types";
import toast from "react-hot-toast";

export const initialState: RegisterFormState = {
  errors: {},
  message: null,
};

const RegisterForm = () => {
  const [state, formAction, pending] = React.useActionState<
    RegisterFormState,
    FormData
  >(async (prevState, formData) => {
    const result = await register(prevState, formData);

    if (result.message) {
      toast.error(result.message);
    }

    return result;
  }, initialState);

  return (
    <form
      action={formAction}
      className="w-[400px] bg-white rounded-lg p-7 flex flex-col justify-center gap-3"
    >
      <h2 className=" text-2xl font-bold text-blue-950 text-center">
        Registration
      </h2>
      <div>
        <Input
          name="username"
          type="text"
          defaultValue={state.values?.username}
          placeholder="Username"
        />
        {state.errors.username && (
          <p className="text-sm text-red-500 mt-1">
            {state.errors.username[0]}
          </p>
        )}
      </div>

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
        {pending ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
};

export default RegisterForm;
