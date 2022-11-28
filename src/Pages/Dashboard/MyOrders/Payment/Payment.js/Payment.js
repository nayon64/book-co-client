import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../../../conponents/Loader/Loader';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
	const bookingBook = useLoaderData()

	const navigation = useNavigation()

	const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
	
	if (navigation.state === "loading") {
    return <Loader></Loader>
  }
    

  
	return (
    <div className="max-w-96 ">
      <div className="sm:w-2/3 md:w-1/2 block border border-primary rounded-lg p-4 mx-auto">
        <h2 className="text-2xl font-bold text-Primary text-center uppercase mb-3">
          CheckOut
        </h2>
        <h3 className="text-xl font-semibold text-secondary">
          Payment for{" "}
          <span className="text-primary font-bold ">
            {bookingBook?.bookName}
          </span>
        </h3>
        <h2 className="text-2xl font-bold text-accent">
          Payment : <span>${bookingBook?.sellingPrice} USD</span>
        </h2>
        <div className="mt-6 96">
          <Elements stripe={stripePromise}>
            <CheckoutForm bookingBook={bookingBook}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;