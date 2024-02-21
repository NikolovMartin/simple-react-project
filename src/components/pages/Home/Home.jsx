import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useModalContext } from "../../../context/ModalContext/ModalContext.hook";

export const Home = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();
  const [modalType, setModalType] = useState(undefined);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(isModalOpen ? `/home?modal=${modalType}` : location.path);
  }, [isModalOpen, modalType]);

  return (
    <>
      <h1>Hello form home</h1>

      <button
        onClick={() => {
          setIsModalOpen(() => true);
          setModalType(() => setModalType("create"));
        }}
      >
        Open modal CREATE
      </button>

      <button
        onClick={() => {
          setIsModalOpen(() => true);
          setModalType(() => setModalType("edit"));
        }}
      >
        Open modal EDIT
      </button>
    </>
  );
};

export default Home;
