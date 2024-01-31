import { useAuthContext } from "../../../context/AuthContext/AutheContext.hook";
import { navItems } from "./Header.static";
import { StyledNav, StyledNavLink } from "./Header.style";

export const Header = () => {
  const { setIsAuthenticated } = useAuthContext();

  return (
    <StyledNav>
      {navItems.map((item) => {
        return (
          <StyledNavLink
            onClick={() => {
              if (item.isLogOut) {
                setIsAuthenticated(false);
              }
            }}
            key={item.name}
            to={item.path}
          >
            {item.name}
          </StyledNavLink>
        );
      })}
    </StyledNav>
  );
};

export default Header;
