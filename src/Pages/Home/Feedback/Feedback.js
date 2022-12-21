import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../conponents/Loader/Loader';
import FeedbackCard from "./FeedbackCard"

const Feedback = () => {
	const { data: feedbacks = [], isLoading } = useQuery({
		queryKey: ["feedbacks"],
		queryFn: async () => {
			const res = await fetch(`https://book-co-server.vercel.app/feedbacks`);
			const data = await res.json()
			return data.slice(0,4)
		}
	})
	console.log(feedbacks)

	if (isLoading) {
		return <Loader></Loader>
	}

	return (
    <section className="md:mt-16 mt-6">
      <h1 className="text-center text-primary font-bold text-4xl divider">
        Feedbacks
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 p-4 gap-4 mt-10">
        {feedbacks.map((category) => (
          <Link key={category._id}  to={`/singleCategory/${category._id}`}>
            <FeedbackCard feedback={category}></FeedbackCard>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Feedback;