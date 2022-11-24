import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
	const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p className="text-xl text-red-500 font-bold">Loading...</p>;
  }

  if (user) {
    return children;
	}
	return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivateRoute;