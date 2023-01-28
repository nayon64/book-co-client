import React from 'react';

const CustomButton = ({ children}) => {
  return (
    <div  className="py-2 px-3 font-semibold text-white bg-secondary rounded text-center hover:bg-primary duration-500 cursor-pointer ">
      {children}
    </div>
  );
};

export default CustomButton;