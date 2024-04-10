import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { RegisterAccountPage } from "./RegisterAccountPage";
import { LoginPage } from "./LoginPage";
import { PatientDetailPage } from "./PatientDetailPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterAccountPage />,
    },
    {
      path: "patients/:patientId",
      element: <PatientDetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
