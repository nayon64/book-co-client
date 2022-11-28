import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../conponents/Loader/Loader';

const AllSellers = () => {

	const {data:allSellers=[] ,isLoading,refetch} = useQuery({
		queryKey: ["sellers"],
		queryFn: async () => {
      const res = await fetch("https://book-and-co-server.vercel.app/allSellers", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
			const data = await res.json()
			return data
		}
  })
  
  const handleSellerVarified = (email) => {
    fetch(`https://book-and-co-server.vercel.app/admin/sellerVarified?email=${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  }

  const handleDeleteSeller = id => {
    console.log(id)
    fetch(`https://book-and-co-server.vercel.app/admin/deleteUser/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Seller Deleted!!!");
        refetch();
      });
  }
  

	if (isLoading) {
		return <Loader></Loader>
	}

	return (
    <div className="min-h-screen border rounded-md ml-4">
      <h2 className="text-3xl text-primary font-bold text-center mt-4 md:mt-6 mb-4">
        All Sellers
      </h2>
      {allSellers?.length > 0 && (
        <div className="overflow-x-auto mx-4 md:mx-6">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>SI</th>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allSellers.map((seller, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleDeleteSeller(seller?._id)}
                      className="btn sm:btn-sm btn-xs btn-accent text-white rounded"
                    >
                      Delete
                    </button>
                    {seller?.sellerVarified ? (
                      <button className="btn sm:btn-sm btn-xs btn-success text-white rounded ml-4">
                        Verifed
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSellerVarified(seller.email)}
                        className="btn sm:btn-sm btn-xs btn-primary text-white rounded ml-4"
                      >
                        Verify
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {allSellers?.length === 0 && (
        <h2 className="text-3xl text-accent font-bold text-center my-4">
          No Seller Found
        </h2>
      )}
    </div>
  );
};

export default AllSellers;