import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { Error404 } from "../components/pages/Error404"
import { Adidas } from "../components/pages/Adidas"
import { Puma } from "../components/pages/Puma"
import { Abibas } from "../components/pages/Abibas"
import { Model } from "../components/pages/Model"

const PATH = {  
    ADIDAS: '/adidas',
    ADIDAS_MODEL: '/adidas/:id',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    //PRICES: '/prices',
} as const

export const router = createBrowserRouter(
    [
        {
        path: '/',
        element: <App/>,
        errorElement:<Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>
            },
            {
                path: PATH.ADIDAS_MODEL,
                element: <Model/>
            },
            {
                path: PATH.PUMA,
                element: <Puma/>
            },
            {
                path:PATH.ABIBAS,
                element: <Abibas/>
            }
        ]
    }
    ]
)


{/* <Route path={'/adidas/:id'} element={<Model/>}/> */}
//useNavigation, useMatches, useRouterError