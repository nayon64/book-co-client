import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
	const bookingBook = useLoaderData()
	console.log(bookingBook)
	return (
		<div>
			<h1>Payment</h1>
		</div>
	);
};

export default Payment;