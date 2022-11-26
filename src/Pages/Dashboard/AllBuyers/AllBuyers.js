import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../conponents/Loader/Loader';

const AllBuyers = () => {
	const { data: allBuyers = [], isLoading } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allBuyers");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen border rounded-md ml-4">
      <h2 className="text-3xl text-primary font-bold text-center mt-4 md:mt-6 mb-4">
        All Buyers
      </h2>
      {allBuyers && (
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
              {allBuyers.map((buyer, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td className="text-end">
                    <button className="btn sm:btn-sm btn-xs btn-accent text-white rounded">
                      Delete
                    </button>
                    <button className="btn sm:btn-sm btn-xs btn-primary text-white rounded ml-4">
                      Verify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!allBuyers && (
        <h2 className="text-3xl text-accent font-bold text-center my-4">
          No Buyer Found
        </h2>
      )}
    </div>
  );
};

export default AllBuyers;