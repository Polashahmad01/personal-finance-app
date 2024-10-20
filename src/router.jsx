import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./views/ErrorPage";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
