import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import UserDetails from "../layout/UserDetails/UserDetails";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    },
    {
    path: "/user/:userId",
    element: <UserDetails></UserDetails>,
    },
    ]);
