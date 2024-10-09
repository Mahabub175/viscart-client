"use client";

import { Modal } from "antd";

const CustomModal = ({ modalOpen, setModalOpen, children }) => {
  return (
    <Modal
      centered
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
