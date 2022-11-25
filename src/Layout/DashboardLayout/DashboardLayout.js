import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import DashboardNavbar from "../../Shared/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {

  const { user } = useContext(AuthContext)

  const [isAdmin] = useAdmin(user?.email)
  
  console.log(user,isAdmin)


  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="drawer drawer-mobile max-w-7xl mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-100 text-base-content">

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
