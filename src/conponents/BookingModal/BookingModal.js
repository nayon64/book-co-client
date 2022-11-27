import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const BookingModal = ({ bookingProduct ,setBookingProduct,refetch}) => {

	// const {register,handleSubmit}=useForm()

	const {user}=useContext(AuthContext)

	const handleBookingConfirmanion = event => {
		event.preventDefault();
		const form = event.target
		const buyerMeetingLocation = form.buyerLocation.value
		const buyerPhoneNumber = form.buyerPhoneNumber.value
		bookingProduct["buyerMeetingLocation"] = buyerMeetingLocation
		bookingProduct["buyerPhoneNumber"] = buyerPhoneNumber
		bookingProduct["buyerName"] = user?.displayName;
		bookingProduct["buyerEmail"] = user?.email
		bookingProduct["bookItemId"]=bookingProduct._id
		delete bookingProduct["_id"]
		

		fetch("http://localhost:5000/bookingItem", {
			method: "POST",
			headers: {
				"content-type":"application/json"
			},
			body:JSON.stringify(bookingProduct)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.acknowledged) {
					toast.success('Book buying Successfull!!!')
					setBookingProduct(null)
					refetch()
				}
				if (!data.acknowledged && data.message === "All ready book the book") {
					toast.error("You are all ready book this book. please check your order.");
					setBookingProduct(null);
					refetch();
				}
		})

	}


  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Booking Confarmaiton!!
          </h3>
          <form onSubmit={handleBookingConfirmanion}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold text-secondary">
                  Book Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={bookingProduct?.bookName}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold text-secondary">
                  Book Selling Price
                </span>
              </label>
              <input
                type="text"
                defaultValue={bookingProduct?.sellingPrice}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold text-secondary">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold text-secondary">
                  Your Email
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold text-secondary">
                  Metting Location
                </span>
              </label>
              <input
							  type="text"
							  name="buyerLocation"
							  required
                placeholder="Write your Metting Location"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold text-secondary">
                  Contact Number
                </span>
              </label>
              <input
				type="text"
				name="buyerPhoneNumber"
				required
                placeholder="Write your moblie number"
                className="input input-bordered w-full "
              />
            </div>
            <div className="mt-6">
              
                
                  <input
                    className="px-3 py-2 bg-primary rounded hover:bg-secondary duration-500 cursor-pointer text-white"
                    type="submit"
                    value="Submit"
                  />
                
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
