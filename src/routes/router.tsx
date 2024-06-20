import {
  Navigate,
  Outlet,
  RouteObject,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/pages/Login";
import { Prices } from "../components/pages/Prices";

const PATH = {
  ADIDAS: "/adidas",
  //ADIDAS_MODEL: '/adidas/:id',
  PUMA: "/puma",
  ABIBAS: "/abibas",
  MODEL: "/:model/:id",
  PRICES: '/prices',
  PROTECTED_PAGE: "/protected-page",
  ERROR: "/error",
  LOGIN: "/login",
  // ERROR: '/*',
} as const;

const publicRoutes: RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },

  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.MODEL,
    element: <Model />,
  },

  {
    path: PATH.PRICES,
    element: <Prices />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },

  {
    path: PATH.ERROR,
    element: <Error404 />,
  },
];
const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED_PAGE,
    element: <ProtectedPage />,
  },
];

export const PrivateRoutes = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
]);

{
  /* <Route path={'/adidas/:id'} element={<Model/>}/> */
}
//useNavigation, useMatches, useRouterError
