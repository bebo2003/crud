import { AiOutlineProfile } from "react-icons/ai";
import { IoBookmarkOutline, IoHomeOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { userImg } from "../../assets/index.js";
import { useState } from "react";
import StudentsList from "../../pages/Students/Students.jsx";

export const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login", { replace: true });
  };
  const Name= localStorage.getItem("userEmail")


  return (
    <Sidebar className="sidebarContainer" collapsed={isCollapsed}>
      {!isCollapsed ? (
        <h4 className="text-gray-800 py-5 my-6">
          <span className="text-yellow-500 p-2">
            <b>|</b>
          </span>
          <b>Panel</b>
        </h4>
      ) : (
        <h4 className="text-gray-800 py-5 my-6 px-2">Panel</h4>
      )}

      <div className="flex flex-col items-center">
        <img
          onClick={handleToggle}
          src={userImg}
          alt="logo"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <p className="text-yellow-500 pt-3">{Name}</p>
      </div>
      <Menu style={{ lineHeight: "2", marginTop: "1rem" }}>
        <MenuItem
          icon={<IoHomeOutline className="text-lg" />}
          component={<Link to="/dashboard/home" />}
        >
          Home
        </MenuItem>
        <MenuItem
          icon={<IoBookmarkOutline className="text-lg" />}
          component={<Link to="/dashboard/Students" />}
        >
          Students
        </MenuItem>
        <MenuItem
          icon={<PiGraduationCap className="text-lg" />}
          component={<Link to="/dashboard/user-form" />}
        >
          Add User
        </MenuItem>
        <MenuItem
          icon={<AiOutlineProfile className="text-lg" />}
          component={<Link to="/dashboard/users" />}
        >
          Users
        </MenuItem>
        <hr className="w-full my-2 border-gray-200" />
        <MenuItem
          icon={<RiLogoutBoxRLine className="text-lg" />}
            onClick={handleLogout}
        >
        
          Logout
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
