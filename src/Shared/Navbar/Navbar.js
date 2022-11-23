import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png"
import CustomButton from '../../conponents/CustomButton/CustomButton';

const Navbar = () => {


	// navbar menu item 
	const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/">Blogs</Link>
      </li>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
    </>
  );

	return (
    <div>
      <div className="navbar max-w-7xl mx-auto py-2 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="h-12">
            <img className="h-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end ">
          <Link to="/">
            <CustomButton>Login</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;