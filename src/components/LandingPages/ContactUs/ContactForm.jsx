"use client";

import { SubmitButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import { Checkbox, Form } from "antd";

const ContactForm = () => {
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
            label={"Phone Number"}
            name={"number"}
            type={"number"}
            placeholder={"Please Enter Your Number"}
            required={true}
          />
          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              { required: true, message: `Please Agree to the Terms & Policy` },
            ]}
          >
            <Checkbox>You agree to our friendly privacy policy.</Checkbox>
          </Form.Item>
        </div>
        <SubmitButton text={"Send Message"} />
      </CustomForm>
    </div>
  );
};

export default ContactForm;
