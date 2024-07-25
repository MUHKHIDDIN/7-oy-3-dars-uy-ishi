import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { request } from "../config/request";
import { saveState } from "../config/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserLogin = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        if (res.data) {
          saveState("user", {
            accessToken: res.data.accessToken,
            ...res.data.user,
          });
          toast.success("Login successful!");
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        toast.error(
          "Login failed. Please check your credentials and try again."
        );
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mt-6">Login</h1>
      <div className="max-w-md mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition duration-200"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none transition duration-200"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
