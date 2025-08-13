import { AiOutlineProfile } from "react-icons/ai";
import { IoBookmarkOutline, IoHomeOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { userImg } from "../../assets/index.js";
import { useState } from "react";

export const SideBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();

  const handleToggle = () => {
    collapseSidebar(); // للتحكم في حالة Sidebar
  };

  const handleMobileToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login", { replace: true });
  };

  const Name = localStorage.getItem("userEmail");

  return (
    <>
      <button
    className="md:hidden fixed top-4 left-4 z-50 p-2 bg-yellow-500 text-white rounded"
    onClick={handleMobileToggle}
  >
    ☰
  </button>
  <div
  className={`absolute md:relative h-full z-40 transition-transform duration-300 ${
    isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  }`}
>
  {/* زر الـ mobile toggle */}


  <Sidebar>
    <div className="px-4">
      <h4 className="text-gray-800 py-5 my-6 text-center">
        {!isMobileOpen ? (
          <>
            <span className="text-yellow-500 p-2">
              <b>|</b>
            </span>
            <b>Panel</b>
          </>
        ) : (
          <b>Panel</b>
        )}
      </h4>

      <div className="flex flex-col items-center">
        <img
          onClick={handleToggle}
          src={userImg}
          alt="logo"
          className="w-24 h-24 rounded-full object-cover mb-4 cursor-pointer"
        />
        <p className="text-yellow-500 pt-3 text-center">{Name}</p>
      </div>

      <Menu style={{ lineHeight: "2", marginTop: "1rem" }}>
        <MenuItem icon={<IoHomeOutline className="text-lg" />} component={<Link to="/dashboard/home" />}>
          Home
        </MenuItem>
        <MenuItem icon={<IoBookmarkOutline className="text-lg" />} component={<Link to="/dashboard/Students" />}>
          Students
        </MenuItem>
        <MenuItem icon={<PiGraduationCap className="text-lg" />} component={<Link to="/dashboard/user-form" />}>
          Add User
        </MenuItem>
        <MenuItem icon={<AiOutlineProfile className="text-lg" />} component={<Link to="/dashboard/users" />}>
          Users
        </MenuItem>
        <hr className="w-full my-2 border-gray-200" />
        <MenuItem icon={<RiLogoutBoxRLine className="text-lg" />} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  </Sidebar>
</div>

      {/* Overlay على الموبايل */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={handleMobileToggle}
        />
      )}
    </>
  );
};
