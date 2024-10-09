import { Button } from "antd";
import React from "react";

export const SubmitButton = ({ loading, text, func }) => {
  return (
    <Button
      style={{
        fontWeight: "bold",
        padding: "0.5rem 1.5rem 2rem 1.5rem",
        width: "100%",
      }}
      htmlType="submit"
      size="large"
      type="primary"
      loading={loading}
      onClick={func}
    >
      {text}
    </Button>
  );
};

export const IconSubmitButton = ({ loading, text, func, icon }) => {
  return (
    <Button
      style={{
        padding: "0.75rem 2rem 2.2rem 2rem",
        display: "flex",
        alignContent: "center",
        gap: "10px",
        fontWeight: "bold",
      }}
      htmlType="submit"
      size="large"
      type="primary"
      loading={loading}
      onClick={func}
    >
      {React.createElement(icon, { className: "size-5 mt-1" })}
      {text}
    </Button>
  );
};
