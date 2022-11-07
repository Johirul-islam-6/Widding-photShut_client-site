import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

import Login from "../Login_Registration/Login";
import Registrar from "../Login_Registration/Registrar";
import Home from "../Components/Home/Home";
import ErrorPage from "../Login_Registration/ErrorPage";
import AllServeces from "../Components/All-services/AllServeces";
import CardDetails from "../Components/CardDetails/CardDetails";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/block',
                element: <Home></Home>
            },
            {
                path: '/all-services',
                element: <AllServeces></AllServeces>
            },

            {
                path: '/card_details/:id',
                element: <CardDetails></CardDetails>
            },

            {
                path: '/registrar',
                element: <Registrar></Registrar>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;