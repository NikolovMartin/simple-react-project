import { useContext } from "react";

import { ModalContext } from "./ModalContext";

export const useModalContext = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return {
    isModalOpen,
    setIsModalOpen,
  };
};
