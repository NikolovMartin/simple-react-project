import { routes } from "../../../statics/routes";

export const navItems = [
  {
    name: "Home",
    path: routes.home,
  },
  {
    name: "Articles",
    path: routes.articles,
  },
  {
    name: "News",
    path: routes.news,
  },
  {
    name: "Log out",
    path: routes.welcome,
    isLogOut: true,
  },
];
