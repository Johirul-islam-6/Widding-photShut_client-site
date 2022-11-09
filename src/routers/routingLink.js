import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

import Login from "../Login_Registration/Login";
import Registrar from "../Login_Registration/Registrar";
import Home from "../Components/Home/Home";
import ErrorPage from "../Login_Registration/ErrorPage";
import AllServeces from "../Components/All-services/AllServeces";
import CardDetails from "../Components/CardDetails/CardDetails";
import MyReviws from "../Components/My-Reviews/MyReviws";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";
import InputReview from "../Components/Add-Reviws-inputFild/InputReview";
import AddServices from "../Components/Add-Services/AddServices";
import UpdatePage from "../Components/Updates/UpdatePage";
import Block from "../Components/Block-Page/Block"

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
                element: <Block></Block>
            },
            {
                path: '/all-services',
                element: <AllServeces></AllServeces>
            },

            {
                path: '/card_details/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`https://assignment-server-site-10.vercel.app/services/${params.id}`)

            },
            {
                path: '/add-reviws/:id',
                element: <InputReview></InputReview>,
                loader: ({ params }) => fetch(`https://assignment-server-site-10.vercel.app/services/${params.id}`)
            },
            {
                path: '/my-reviews',
                element: (<PrivetRoute><MyReviws></MyReviws></PrivetRoute>),

            },
            {
                path: '/update/:id',
                element: <UpdatePage></UpdatePage>,
                loader: ({ params }) => fetch(`https://assignment-server-site-10.vercel.app/all-reviews/${params.id}`)

            },
            {
                path: '/add-services',
                element: (<PrivetRoute><AddServices></AddServices></PrivetRoute>),
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