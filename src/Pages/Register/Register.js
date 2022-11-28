import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../../assets/image/google.png";
import CustomButton from "../../conponents/CustomButton/CustomButton";
import SmallLoader from "../../conponents/Loader/SmallLoader";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken/useToken";

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmdPassword, setShowConfirmdPassword] = useState(false);
  const [confirmdPasswordError, setConfirmdPasswordError] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [token] = useToken(loginEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const { createUser, updateUserProfile, signInWithProvider } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const imageHostKey = process.env.REACT_APP_imgbb_API_KEY;

  // create user with email and password
  const handleUserCreate = (data) => {
    setRegisterLoading(false);
    setConfirmdPasswordError("");

    //   match password and cofirmd password
    if (!(data.password === data.confirmdPassword)) {
      setConfirmdPasswordError("Your password doesn't match.");
      return;
    }

    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    //   fetch image file in imgbb
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData?.data?.display_url) {
          const imgUrl = imageData?.data?.display_url;
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              console.log(user);

              // update user name and imgurl
              updateUserProfile({ displayName: data.name, photoURL: imgUrl })
                .then(() => {
                  const createUser = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                  };

                  fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(createUser),
                  })
                    .then((res) => res.json())
                    .then((successData) => {
                      if (successData.acknowledged) {
                        setRegisterLoading(false);
                        toast.success("SuccessFully User Create");
                        setLoginEmail(data.email);
                        reset();
                      }
                    });
                })
                .catch((err) => {
                  toast.error(err.message);
                });
            })
            .catch((err) => {
              console.log(err);
              toast.error(err.message);
            });
        }
      });
  };

  // handle google login
  const handleGoogleLogin = () => {
    signInWithProvider(googleProvider)
      .then((result) => {
        console.log(result);

        const user = {
          name: result.user.displayName,
          email: result.user.email,
          role: "Buyer",
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoginEmail(result.user.email);
          });
        toast.success("Successfully Login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
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
                {...register("img")}
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
                    // pattern: {
                    //   value:
                    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/i,
                    //   message: "Please storng your password.",
                    // },
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
              {registerLoading ? (
                <SmallLoader></SmallLoader>
              ) : (
                <CustomButton>
                  <input
                    className="w-full h-full cursor-pointer"
                    type="submit"
                    value="Rgister"
                  />
                </CustomButton>
              )}
            </div>
          </form>
          <p>
            Already hava an account?{" "}
            <Link to="/login" className="font-semibold text-primary">
              Login
            </Link>
          </p>
          <div className="divider text-secondary">OR</div>
          <div
            onClick={handleGoogleLogin}
            className="border-2 rounded-lg flex justify-center cursor-pointer items-center"
          >
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
