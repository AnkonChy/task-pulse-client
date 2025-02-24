import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import AllTask from "../pages/AllTask/AllTask";
import UpdateTask from "../pages/UpdateTask/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/allTask",
        element: <AllTask></AllTask>,
      },
      {
        path: "/updateTask",
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);

export default router;
