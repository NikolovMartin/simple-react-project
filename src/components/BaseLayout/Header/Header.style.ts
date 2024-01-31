import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: whitesmoke;
  margin: 0 1rem;
`;

export const StyledNav = styled.nav`
  border-bottom: 1px solid whitesmoke;
  display: flex;
  justify-content: end;

  a.active {
    color: black;
    font-weight: 600;
  }
`;
