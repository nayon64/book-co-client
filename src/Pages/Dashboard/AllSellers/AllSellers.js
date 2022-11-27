import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../conponents/Loader/Loader';

const AllSellers = () => {

	const {data:allSellers=[] ,isLoading,refetch} = useQuery({
		queryKey: ["sellers"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/allSellers");
			const data = await res.json()
			return data
		}
  })
  
  const handleSellerVarified = (email) => {
    fetch(`http://localhost:5000/admin/sellerVarified?email=${email}`, {
      method:"PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch()
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
                    <button className="btn sm:btn-sm btn-xs btn-accent text-white rounded">
                      Delete
                    </button>
                    {seller?.sellerVarified ? (
                      <button
                        className="btn sm:btn-sm btn-xs btn-success text-white rounded ml-4"
                      >
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