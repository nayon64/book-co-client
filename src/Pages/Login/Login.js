import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleImg from "../../assets/image/google.png";
import CustomButton from "../../conponents/CustomButton/CustomButton";
import SmallLoader from "../../conponents/Loader/SmallLoader";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken/useToken";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [token] = useToken(loginEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const { logIn, signInWithProvider } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleEmailAndPasswordLogin = (data) => {
    setLoginLoading(true);
    logIn(data.email, data.password)
      .then((result) => {
        setLoginEmail(result.user.email);
        reset();
        toast.success("Successfully Login");
        setLoginLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoginLoading(false);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    signInWithProvider(googleProvider)
      .then((result) => {
        const user = {
          name: result.user.displayName,
          email: result.user.email,
          role: "Buyer",
        };

        // if user are not registered, then user add in database
        fetch("https://book-co-server.vercel.app/users", {
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
            toast.success("Successfully Login");
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="card flex-shrink-0 mx-auto w-96 shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleEmailAndPasswordLogin)}>
            <h3 className="text-center text-primary text-xl font-bold">
              User Login
            </h3>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-secondary text-base font-medium">
                  Email
                </span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered h-10"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="input input-bordered text-sm rounded-lg  block w-full p-2.5 h-10"
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
              <CustomButton>
                {loginLoading ? (
                  <SmallLoader></SmallLoader>
                ) : (
                  <input
                    className="w-full h-full cursor-pointer"
                    type="submit"
                    value="Login"
                  />
                )}
              </CustomButton>
            </div>
          </form>
          <p>
            Create an account?
            <Link className="font-semibold text-primary ml-2" to="/register">
              Register
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

export default Login;
