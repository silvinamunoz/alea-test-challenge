import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { useTokenStore } from "../store/store";

const isLogged = async () => {
    const token = useTokenStore.getState().token;
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