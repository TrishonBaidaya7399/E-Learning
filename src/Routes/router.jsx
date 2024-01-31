import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home Page/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../assets/Error page/Error";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
        ]
    }
])