import { Form, Input } from "antd";

const CustomPasswordInput = ({ name, label, placeholder, required }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: `${label} is required` }]}
    >
      <Input.Password size="large" placeholder={placeholder} />
    </Form.Item>
  );
};

export default CustomPasswordInput;
