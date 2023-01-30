import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/image/logo.png"
import CustomButton from '../../conponents/CustomButton/CustomButton';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);


  const menuRoutes = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Books",
      path: "/books",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];
  const menus = (
    <>
      {menuRoutes.map((menu, i) => (
        <NavLink
          to={menu.path}
          key={i}
          className={({ isActive }) =>
            isActive
              ? "bg-slate-800 font-extrabold text-white rounded py-2 px-3 "
              : "py-2 px-3 rounded-sm"
          }
        >
          {menu.name}
        </NavLink>
      ))}
    </>
  );

	return (
    <div className='sticky top-0 z-40'>
      <div className="navbar max-w-7xl mx-auto py-2 px-4  bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
          <Link to="/" className="h-12">
            <img className="h-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0  text-secondary font-semibold">
            {menus}
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.uid ? (
            <>
              <CustomButton>
                <span onClick={logOut}>LogOut</span>
              </CustomButton>
              <div
                className="tooltip tooltip-bottom flex justify-center items-center"
                data-tip={user.displayName}
              >
                <div className="avatar ">
                  <div className="w-10 ml-3 border rounded-full cursor-pointer">
                    <img src={user.photoURL} alt="" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">
              <CustomButton>Login</CustomButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;