import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import googleImg from "../../assets/image/google.png"
import { useForm } from "react-hook-form";

const Login = () => {
	const {register, handleSubmit } = useForm();
	const [showPassword, setShowPassword] = useState(false);

	const handleEmailAndPasswordLogin = data => {
		console.log(data)
	}

	
	
  return (
    <div>
      <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleEmailAndPasswordLogin)}>
            <h3 className="text-center text-primary text-xl font-bold">
              User Login
            </h3>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-secondary font-medium">
                  Email
                </span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered border-primary"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="input input-bordered border-primary text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="Enter your password"
                  required
                />

                {/* password show toggle icon  */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-xl cursor-pointer"
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            

            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            Create an account? <Link>Register</Link>
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

export default Login;
