"use client";

import { SubmitButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import Link from "next/link";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const onSubmit = (value) => {};
  return (
    <div>
      <CustomForm onSubmit={onSubmit}>
        <div className="mt-4 w-full">
          <CustomInput
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Please Enter Your Email"}
            required={true}
          />
          <CustomInput
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Please Enter Your Password"}
            required={true}
          />
        </div>
        <SubmitButton text={"Log In"} />
      </CustomForm>
      <div className="flex items-center my-6">
        <div className="border w-full h-0"></div>
        <span className="font-bold">Or</span>
        <div className="border w-full h-0"></div>
      </div>
      <SocialLogin />
      <div className="text-center">
        <span>Don’t have an account?</span>
        <Link href={"/sign-up"} className="font-bold text-primary text-lg">
          {" "}
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
