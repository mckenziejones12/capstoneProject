import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import PatientList from "./PatientList";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "patients",
      element: <PatientList />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
