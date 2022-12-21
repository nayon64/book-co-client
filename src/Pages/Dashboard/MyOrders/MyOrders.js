import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../conponents/Loader/Loader';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {

	const {user}=useContext(AuthContext)
	const { data:myOrders=[],isLoading,refetch} = useQuery({
		queryKey: ["myOrders"],
		queryFn: async () => {
      const res = await fetch(
        `https://book-co-server.vercel.app/buyer/myOrders?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
			const data = res.json()
			return data
		}
	})

	if (isLoading) {
		return <Loader></Loader>
	}


	console.log(myOrders);

	return (
    <div className="min-h-screen border rounded-md ml-4">
      <h2 className="text-3xl text-primary font-bold text-center mt-4 md:mt-6 mb-4">
        All Sellers
      </h2>
      {myOrders?.length > 0 && (
        <div className="overflow-x-auto mx-4 md:mx-6">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>SI</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((myOrder, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 ">
                        <img src={myOrder?.bookImg} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{myOrder.bookName}</td>
                  <td>{myOrder.sellingPrice}</td>
                  <td className="text-end">
                    {myOrder.paid?<h3 className='text-green-600 text-xl font-bold'>Paid</h3>:<Link
                      to={`/dashboard/myOrders/payment/${myOrder._id}`}
                      className="btn sm:btn-md btn-xs btn-primary text-white rounded"
                    >
                      Pay
                    </Link>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {myOrders?.length === 0 && (
        <h2 className="text-3xl text-accent font-bold text-center my-4">
          No Seller Found
        </h2>
      )}
    </div>
  );
};

export default MyOrders;