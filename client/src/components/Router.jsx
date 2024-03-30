import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { CreateNewAccountPage } from "./CreateNewAccountPage";
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
      element: <CreateNewAccountPage />,
    },
    {
      path: "patients/:patientId",
      element: <PatientDetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
