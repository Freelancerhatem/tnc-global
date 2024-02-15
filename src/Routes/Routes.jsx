import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    },
    ]);
