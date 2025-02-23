import { ToastContainer } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
