import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 4rem;
  background: red;
  opacity: 0.5;
  z-index: 2;
`;

export const ModalContent = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
