import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login";
import Users from "../pages/Users";
import ErrorPage from "../pages/ErrorPage";

const isLogged = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        return redirect("/");
    }
    return null;
};

const routes =
    createBrowserRouter(
        [
            {
                path: "/",
                Component: Login,
            },
            {
                path: "/users",
                Component: Users,
                loader: isLogged
            },
            {
                path: "*",
                Component: ErrorPage
            },
        ]
    )

export default routes;