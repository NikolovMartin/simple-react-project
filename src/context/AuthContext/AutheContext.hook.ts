import { useContext } from "react";

import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};
