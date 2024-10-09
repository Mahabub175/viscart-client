"use client";

import { SubmitButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import SocialLogin from "../Login/SocialLogin";

const SignUpForm = () => {
  const onSubmit = (value) => {};
  return (
    <div>
      <CustomForm onSubmit={onSubmit}>
        <div className="mt-4 mb-6">
          <CustomInput
            label={"Name"}
            name={"name"}
            type={"text"}
            placeholder={"Please Enter Your Name"}
            required={true}
          />
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
          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              { required: true, message: `Please Agree to the Terms & Policy` },
            ]}
          >
            <Checkbox>I agree to the terms & policy</Checkbox>
          </Form.Item>
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
        <span>Already have an account?</span>
        <Link href={"/sign-in"} className="font-bold text-primary text-lg">
          {" "}
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
