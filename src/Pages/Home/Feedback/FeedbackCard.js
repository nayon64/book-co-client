import React from 'react';

const FeddbackCard = ({ feedback }) => {
	console.log(feedback)
	return (
    <div className="border h-full rounded-lg p-4 flex">
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
        <div className='mt-3'>
          <p>{feedback?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default FeddbackCard;