import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { PatientDetailPage } from "./PatientDetailPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "patients/:patientId",
      element: <PatientDetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
