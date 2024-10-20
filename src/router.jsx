import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./views/ErrorPage";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import RegisterPage from "./views/RegisterPage";
import HomePage from "./views/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/register",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
