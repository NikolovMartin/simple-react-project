import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BaseLayout } from "./BaseLayout/BaseLayout";
import { useAuthContext } from "../context/AuthContext/AutheContext.hook";
import { routes } from "../statics/routes";

export const AuthHOC = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  // Logic for is user authenticated
  const isUserAuthenticated = isAuthenticated;

  console.log("Log");

  if (!isUserAuthenticated) {
    return (
      <>
        <h2>Sorry! You are not authenticated</h2>
        <button
          onClick={() => {
            setIsAuthenticated(true);
            navigate(routes.home);
          }}
        >
          LogIn
        </button>
      </>
    );
  }

  return (
    <BaseLayout>
      <h2>Hello user!</h2>
      {children}
      {/* Outlet is needed in case of defining routes as plain objects */}
      <Outlet />
    </BaseLayout>
  );
};

AuthHOC.propTypes = {
  children: React.Component,
};

export default AuthHOC;
