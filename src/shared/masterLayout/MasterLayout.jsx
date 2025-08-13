import { Outlet } from "react-router-dom";
import { SideBar } from "../../shared/Sidebar/Sidebar.jsx";
import { NavBar } from "../NavBar/NavBar.jsx";

const MasterLayout = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="w-full">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
