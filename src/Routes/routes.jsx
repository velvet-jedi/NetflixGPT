import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

const Login = lazy(() => import('../Components/Login'))
const Browse = lazy(() => import('../Components/Browse'))


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>),
    },
    {
        path: "/browse",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Browse />
            </Suspense>),
    },
])

export default appRouter;