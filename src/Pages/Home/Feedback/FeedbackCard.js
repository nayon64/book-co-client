import React from 'react';

const FeddbackCard = ({ feedback }) => {
	console.log(feedback)
	return (
    <div className="border h-full shadow-lg rounded-lg p-5 flex">
      <div>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={feedback?.img} alt="" />
          </div>
        </div>
      </div>
      <div className='ml-3'>
        <div>
          <h4 className='text-xl font-semibold'>{feedback?.name}</h4>
        </div>
        <div className='mt-1'>
          <p className='text-sm text-gray-600'>{feedback?.message.slice(0,120)}...</p>
        </div>
      </div>
    </div>
  );
};

export default FeddbackCard;