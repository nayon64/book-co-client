import React from 'react';

const FeddbackCard = ({ feedback }) => {
	console.log(feedback)
	return (
    <div className=" flex">
      <div className="w-2/6 h-full object-cover">
        <img className="w-full  " src={feedback?.img} alt="" />
      </div>
      <div className="ml-3 p-6  w-4/6 -mt-32 pr-12 ">
        <div className='flex flex-col justify-center  h-full'>
          <h2 className="text-3xl font-bold text-white border-l-8 pl-8 py-4 border-red-500">
            {feedback?.title}
          </h2>
          <p className='pl-12 py-4 text-gray-300 text-xl font-sm'>{feedback?.message}</p>
          <div>
            <h3 className='ml-12 text-white text-3xl font-bold'>{feedback?.userName}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeddbackCard;