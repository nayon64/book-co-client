import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ bookingProduct }) => {
	console.log(bookingProduct);
	

  const handleConfirmd = () => {
    console.log(bookingProduct?._id)
    fetch(`http://localhost:5000/bookBooking/${bookingProduct?._id}`, {
      method: "PUT",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          console.log(data);
          toast.success("Booking Successfull!!!")
        }
          
      })
    
  }


  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label onClick={handleConfirmd} htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;