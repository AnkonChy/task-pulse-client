import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import AllTask from "../pages/AllTask/AllTask";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddTask></AddTask>,
          </PrivateRoute>
        ),
      },
      {
        path: "/allTask",
        element: (
          <PrivateRoute>
            <AllTask></AllTask>,
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTask/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://task-pulse-server-snowy.vercel.app/${params.id}`
          );
          return response.json();
        },
      },
    ],
  },
]);

export default router;
