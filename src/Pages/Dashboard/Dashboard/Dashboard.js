import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin/useAdmin';
import useSeller from '../../../hooks/useSeller/useSeller';

const Dashboard = () => {


	const { user } = useContext(AuthContext)
	const [isAdmin]=useAdmin(user?.email)
	const [isSeller]=useSeller(user?.email)

	console.log(isAdmin,isSeller)
	return (
    <div className='flex justify-center items-center h-full'>
      <div className='text-center'>
				<h1 className='text-6xl font-bold text-Primary'>WELLCOME TO</h1>
				<h1 className='text-6xl font-bold text-Primary'><span className='text-accent'>{isAdmin && "ADMIN"}{isSeller && "SELLER"}</span> DASHBOARD</h1>
      </div>
    </div>
  );
};

export default Dashboard;