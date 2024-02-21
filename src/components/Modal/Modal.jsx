import { useLocation } from "react-router-dom";
import { useModalContext } from "../../context/ModalContext/ModalContext.hook";
import { ModalContent, ModalWrapper } from "./Modal.style";

export const Modal = () => {
  const { setIsModalOpen } = useModalContext();
  const location = useLocation();
  const params = new URLSearchParams(location.search).get("modal");

  return (
    <ModalWrapper>
      <ModalContent>
        {params === "create" && <span>Hello from Modal CREATE</span>}
        {params === "edit" && <span>Hello from Modal EDIT</span>}
        <button onClick={() => setIsModalOpen(false)}>X</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
