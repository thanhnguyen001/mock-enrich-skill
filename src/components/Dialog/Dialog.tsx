import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { show } from "reducers/dialogReducer";

const Dialog: React.FC = () => {
  const { type, msg, isShow, title, redirect } = useAppSelector((state) => state.dialog);
  const [isModalOpen, setIsModalOpen] = useState(isShow);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsModalOpen(isShow);
  }, [isShow]);

  const handleOk = () => {
    dispatch(show({ title, type, msg, isShow: false }));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    dispatch(show({ title, type, msg, isShow: false }));
    setIsModalOpen(false);
    navigate(`${redirect}`);
  };
  return (
    <div>
      <Modal title={title} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{msg}</p>
      </Modal>
    </div>
  );
};

export default Dialog;
