import React from 'react';

const CustomButton = ({children}) => {
	return (
    <div className="py-2 px-3 text-white bg-secondary rounded hover:bg-primary duration-500 ">
      {children}
    </div>
  );
};

export default CustomButton;