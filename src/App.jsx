import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import Articles from "./components/pages/Articles/Articles.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";
import ArticleDetails from "./components/pages/Articles/ArticleDetails/ArticleDetails";
import News from "./components/pages/Nеws/News";
import { routes } from "./statics/routes";
import AuthHOC from "./components/authHOC.jsx";
import { AuthContextProvider } from "./context/AuthContext/AuthContext.jsx";
import { ModalContextProvider } from "./context/ModalContext/ModalContext.jsx";

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Router>
          <Routes>
            <Route path={routes.welcome} element={<AuthHOC />}>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.articles} element={<Articles />}>
                <Route
                  path={routes.articleDetails}
                  element={<ArticleDetails />}
                />
              </Route>
              <Route path={routes.news} element={<News />} />
            </Route>
            <Route path={routes.notFound} element={<NotFound />} />
          </Routes>
        </Router>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

// Define routes as plain objects
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AuthHOC />,
//     children: [
//       {
//         path: routes.home,
//         element: <Home />,
//       },
//       {
//         path: routes.articles,
//         element: <Articles />,
//         children: [
//           {
//             path: routes.articleDetails,
//             element: <ArticleDetails />,
//           },
//         ],
//       },

//       {
//         path: routes.news,
//         element: <News />,
//       },
//       {
//         path: routes.notFound,
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <AuthContextProvider>
//       <RouterProvider router={router} />
//     </AuthContextProvider>
//   );
// }

export default App;
