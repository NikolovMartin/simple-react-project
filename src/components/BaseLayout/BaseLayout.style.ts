import styled from "styled-components";

export const Container = styled.div`
  background-color: gray;
  max-width: 100%;
  height: 100%;
  flex: 1;
  z-index: 1;

  &.modalOpen {
    pointer-events: none;
  }
`;
