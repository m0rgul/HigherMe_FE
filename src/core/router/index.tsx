import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";

import {
  ForgotPassword,
  UserLogin,
  UserProfile,
  UserSignup,
} from "../../user/views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/feed" replace /> },
      {
        path: "/assessments",
        element: (
          <ProtectedRoute>
            <div className="text-black">Assessments</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "/feed",
        element: (
          <ProtectedRoute>
            <div className="text-black">Feed</div>{" "}
          </ProtectedRoute>
        ),
      },

      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <div className="text-black">Jobs</div>
          </ProtectedRoute>
        ),
      },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <div className="text-black">Settings</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/signup",
        element: <UserSignup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
