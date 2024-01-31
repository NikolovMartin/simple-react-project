/* eslint-disable react/prop-types */
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "../../../statics/routes";
import { useState } from "react";

export const Articles = ({ children }) => {
  const navigate = useNavigate();
  const [isNestedPageShown, setIsNestedPageShown] = useState(false);

  return (
    <div>
      <h1>Hello form Articles</h1>
      <button
        onClick={() => {
          setIsNestedPageShown(() => !isNestedPageShown);

          if (!isNestedPageShown) {
            return navigate(`${routes.articles}/2`);
          }

          navigate(`${routes.articles}`);
        }}
      >
        {isNestedPageShown
          ? "Hide nested article details page"
          : "Show nested article details page"}
      </button>
      <Outlet />
      {children}
    </div>
  );
};

export default Articles;
