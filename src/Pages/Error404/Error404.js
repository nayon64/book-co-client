import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from "../../assets/image/errorPage.png"
import CustomButton from '../../conponents/CustomButton/CustomButton';

const Error404 = () => {
	return (
    <div className="w-screen h-screen flex items-center flex-col justify-center p-4">
      <img src={errorImg} alt="" />
      <div className=" text-center">
        <p className="text-4xl font-bold text-secondary mb-6">
          This page not found
        </p>
        <Link to="/">
          <CustomButton>Go Back Home</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Error404;