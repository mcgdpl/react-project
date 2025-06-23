import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../containers/Home";
import Contact from "../containers/Contact";
import Users from "../containers/Users";
import PageNotFound from "../components/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "contact", element: <Contact /> },
            { path: "users", element: <Users /> },
            { path: "*", element: <PageNotFound /> },
        ],
    },
]);

export default router;