import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import About from "./components/pages/About/About.jsx";
import Tasks from "./components/pages/Tasks/Tasks.jsx";

const Layout = () => (
    <>
        <Header />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/goods",
                element: <Tasks />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />,
);
