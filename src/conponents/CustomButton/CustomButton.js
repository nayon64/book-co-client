import React from 'react';

const CustomButton = ({children}) => {
	return (
    <div className="py-2 px-3 text-white bg-primary rounded text-center hover:bg-secondary duration-500 cursor-pointer">
      {children}
    </div>
  );
};

export default CustomButton;