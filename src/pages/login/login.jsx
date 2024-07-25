import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { saveState } from "../../config/storage";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../components/user-login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    request
      .post("/register", data)
      .then((res) => {
        if (res.data) {
          saveState("user", {
            accessToken: res.data.accessToken,
            ...res.data.user,
          });
          toast.success("Registration successful!");
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        toast.error("Registration failed. Please try again.");
        console.error(error);
      });
  };

  return (
    <>
      <ToastContainer />
      {open ? (
        <UserLogin />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mt-6">Register</h1>
          <div className="max-w-md mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
            <form onSubmit={handleSubmit(registerUser)} className="space-y-4">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <input
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <input
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200 mx-auto block"
      >
        {open ? "Register" : "Login"}
      </button>
    </>
  );
};
