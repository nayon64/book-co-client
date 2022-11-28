import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SmallLoader from "../../../../../conponents/Loader/SmallLoader";

const CheckoutForm = ({ bookingBook }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
	const { sellingPrice: price, buyerEmail, buyerName, _id ,bookItemId} = bookingBook;
	console.log("bookingbook",bookingBook)

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://book-and-co-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      setPaymentLoading(false);
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      setPaymentLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setPaymentLoading(false);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log(paymentMethod);
    }

    setSuccess("");
    setPaymentLoading(true);
    const { paymentIntent, error: cofirmdError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });

    if (cofirmdError) {
      setPaymentLoading(false);
      setCardError(cofirmdError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        buyerEmail,
        bookingId: _id,
        bookItemId,
      };

      
      fetch("https://book-and-co-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("congratulation!! Your Payment Successfull");
            toast.success("Payment Successfull!!");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setCardError("");
    setPaymentLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        {
          <div className="w-24 text-center  bg-primary rounded mt-4">
            {paymentLoading ? (
              <SmallLoader></SmallLoader>
            ) : (
              <button
                className=" hover:bg-secondary duration-500 font-semibold text-white w-full h-full py-1 rounded"
                type="submit"
                disabled={!stripe && !clientSecret}
              >
                Pay
              </button>
            )}
          </div>
        }
      </form>
      {cardError && <p className="text-rose-400 mt-4">{cardError}</p>}
      {success && (
        <div className="mt-6">
          <p className="text-green-600 font-semibold text-sm">{success}</p>
          <p className="text-primary font-semibold text-sm">
            Your Transaction Id : 
            <span className="text-bold text-secondary ml-2 text-base">
              {transactionId}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
