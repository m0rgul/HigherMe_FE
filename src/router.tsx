import { createBrowserRouter, Navigate } from "react-router-dom";

import LayoutWithNav from "components/LayoutWithNav";
import LoginLayout from "components/LoginLayout";
import ErrorPage from "components/ErrorPage";
import ProtectedRoute from "components/ProtectedRoute";
import { ForgotPassword, UserLogin, UserProfile, UserSignup } from "pages/user";

const Assessments = () => <div className="text-black">Assessments</div>;
const Home = () => <div className="text-black">Home</div>;
const Jobs = () => <div className="text-black">Jobs</div>;
const Settings = () => <div className="text-black">Settings</div>;

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <UserLogin /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "signup", element: <UserSignup /> },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LayoutWithNav />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "assessments", element: <Assessments /> },
      { path: "jobs", element: <Jobs /> },
      { path: "profile", element: <UserProfile /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

export default router;
