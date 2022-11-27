import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../conponents/Loader/Loader';

const ReportedItems = () => {

  const { data: reportedItems = [], isLoading,refetch } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reportedItems");
      const data = await res.json();
      return data;
    },
  });


  const handleDeleteBookItem = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/reportedItems/${id}`, {
      method:"DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Book Item Successfully Deleted.");
        }
      });
  }

  if (isLoading) {
    return <Loader></Loader>
  }
  console.log(reportedItems)

	return (
    <div className="min-h-screen border rounded-md ml-4 ">
      <h2 className="text-3xl text-primary font-bold text-center mt-4 md:mt-6 mb-4">
        Reported Itmes
      </h2>
      {reportedItems?.length > 0 && (
        <div className="overflow-x-auto mx-4 md:mx-6">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>SI</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reportedItems.map((reportedItem, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 ">
                        <img src={reportedItem?.bookImg} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{reportedItem?.bookName}</td>
                  <td>{reportedItem?.sellingPrice}</td>
                  <td>{reportedItem?.sellerName}</td>
                  <td>{reportedItem?.sellerEmail}</td>
                  <td onClick={() => handleDeleteBookItem(reportedItem?._id)} className="text-end">
                    <button className="btn sm:btn-sm btn-xs btn-accent text-white rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {reportedItems?.length === 0 && (
        <h2 className="text-3xl text-accent font-bold text-center my-4">
          No Reported Item Found
        </h2>
      )}
    </div>
  );
};

export default ReportedItems;