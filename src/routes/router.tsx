import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";

const PATH = {
  ADIDAS: "/adidas",
  //ADIDAS_MODEL: '/adidas/:id',
  PUMA: "/puma",
  ABIBAS: "/abibas",
  MODEL: "/:model/:id",
  //PRICES: '/prices',
  PROTECTED_PAGE: "/protected-page",
  //ERROR: '/error',
 ERROR: '/*',
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: PATH.ADIDAS,
        element: <Adidas />,
      },
      // {
      //     path: PATH.ADIDAS_MODEL,
      //     element: <Model/>
      // },
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
        path: PATH.PROTECTED_PAGE,
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        ),
      },

      {
        path: PATH.ERROR,
        element: <Error404 />,
      },
    ],
  },
]);

{
  /* <Route path={'/adidas/:id'} element={<Model/>}/> */
}
//useNavigation, useMatches, useRouterError
