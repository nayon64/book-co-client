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
  console.log(bookingBook)
  console.log(stripePromise)
	return (
    <div className="max-w-96 ">
      <div className="w-96 block border border-primary rounded-lg p-4 mx-auto">
        <h3>
          Payment for <span>{bookingBook?.bookName}</span>
        </h3>
        <h4>
          Payment : <span>${bookingBook?.sellingPrice} USD</span>
        </h4>
        <div className="mt-6 w-80">
          <Elements stripe={stripePromise}>
            <CheckoutForm bookingBook={bookingBook}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;