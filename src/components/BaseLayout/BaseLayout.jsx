import Header from "./Header/Header";
import { Container } from "./BaseLayout.style";
import PropTypes from "prop-types";
import { useModalContext } from "../../context/ModalContext/ModalContext.hook";
import Modal from "../Modal/Modal";

export const BaseLayout = ({ children }) => {
  const { isModalOpen } = useModalContext();
  return (
    <>
      {isModalOpen && <Modal />}

      <Container className={isModalOpen ? "modalOpen" : null}>
        <Header />
        {children}
      </Container>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};
