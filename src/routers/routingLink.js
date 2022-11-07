import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

import Login from "../Login_Registration/Login";
import Registrar from "../Login_Registration/Registrar";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,

        children: [

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