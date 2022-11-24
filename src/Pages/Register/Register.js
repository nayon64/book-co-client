import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import googleImg from "../../assets/image/google.png"
import CustomButton from '../../conponents/CustomButton/CustomButton';

const Register = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmdPassword, setShowConfirmdPassword] = useState(false);
  const [confirmdPasswordError, setConfirmdPasswordError] = useState("");

  const handleUserCreate = (data) => {
	  console.log(data.password, data.confirmdPassword);
	  setConfirmdPasswordError("")
	  if (!(data.password === data.confirmdPassword)) {
		  setConfirmdPasswordError("Your password doesn't match.")
		  return;
	  }
  };




	return (
    <div>
      <div className="card flex-shrink-0 mx-auto w-96 shadow-2xl bg-base-100">
        <div className="card-body w-full">
          <form onSubmit={handleSubmit(handleUserCreate)}>
            <h3 className="text-center text-primary text-xl font-bold">
              User Registration Form
            </h3>
            <div className="form-control">
              <label className="label pb-1">
                <span className="block text-base font-medium text-secondary">
                  Full Name
                </span>
              </label>
              <input
                {...register("name", { required: "Please enter your email" })}
                type="text"
                placeholder="Enter Your Full Name"
                className="input input-bordered h-10"
              />
            </div>
            <div className="form-control mt-1">
              <label className="label pb-1">
                <span className="block text-base font-medium text-secondary">
                  Select Your Image
                </span>
              </label>
              <input
                type="file"
                className="file-input file-input-md file-input-bordered "
              />
            </div>
            <div className="form-control">
              <label className="label pb-1">
                <span className="block text-base font-medium text-secondary">
                  Email
                </span>
              </label>
              <input
                {...register("email", { required: "Please enter your email" })}
                type="email"
                placeholder="email"
                className="input input-bordered h-10"
              />
            </div>
            {errors.email && (
              <p className="text-rose-500">{errors.email?.message}</p>
            )}

            <div className="mt-3 form-control">
              <label
                htmlFor="password"
                className="block pb-1 text-base font-medium text-secondary"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Enter your password",
                    minLength: {
                      value: 6,
                      message: "Please Enter 6 charecter.",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/i,
                      message: "Please storng your password.",
                    },
                  })}
                  className="input input-bordered rounded-lg  block w-full p-2.5 h-10"
                  placeholder="Enter your password"
                />

                {/* password show toggle icon  */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3  cursor-pointer"
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
            </div>

            {errors.password && (
              <p className="text-rose-500">{errors.password?.message}</p>
            )}

            <div className="mt-3 form-control">
              <label
                htmlFor="password"
                className="block pb-1 text-base font-medium text-secondary"
              >
                Confirmd Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showConfirmdPassword ? "text" : "password"}
                  {...register("confirmdPassword", {
                    required: "Enter your confirmd password.",
                  })}
                  className="input input-bordered rounded-lg  block w-full p-2.5 h-10"
                  placeholder="Re-Enter your password"
                />

                {/* password show toggle icon  */}
                <span
                  onClick={() => setShowConfirmdPassword(!showConfirmdPassword)}
                  className="absolute right-3  cursor-pointer"
                >
                  {showConfirmdPassword ? (
                    <FaEye></FaEye>
                  ) : (
                    <FaEyeSlash></FaEyeSlash>
                  )}
                </span>
              </div>
            </div>

            {errors.confirmdPassword && (
              <p className="text-rose-500">
                {errors.confirmdPassword?.message}
              </p>
            )}
            {confirmdPasswordError && (
              <p className="text-rose-500">{confirmdPasswordError}</p>
            )}

            <div className="form-control mb-4 mt-2">
              <label className="label">
                <span className="label-text text-lg font-medium text-secondary">
                  Type of account?
                </span>
              </label>
              <div className="flex">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    value="Buyer"
                    {...register("role")}
                    checked
                  />
                  <label className="label">
                    <span className="label-text text-secondary font-medium">
                      Buyer
                    </span>
                  </label>
                </div>
                <div className="flex items-center ml-6">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    value="Seller"
                    {...register("role")}
                  />
                  <label className="label">
                    <span className="label-text text-secondary font-medium">
                      Seller
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="form-control">
              <CustomButton>Register</CustomButton>
            </div>
          </form>
          <p>
            Already hava an account?{" "}
            <Link to="/login" className="font-semibold text-primary">
              Login
            </Link>
          </p>
          <div className="divider text-secondary">OR</div>
          <div className="border-2 rounded-lg flex justify-center cursor-pointer items-center">
            <img className="w-6 py-2" src={googleImg} alt="" />
            <span className="text-base ml-2 font-semibold">
              Log in with Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;