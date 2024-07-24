import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Signup successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.userInfo));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="w-full h-screen bg-gray-950 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="border-2"
      >
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute bg-zinc-800 border-2 rounded-lg px-6 py-3 z-999">
          <div className="flex justify-between items-center font-bold text-lg ">
            <h3>SignUp</h3>
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost right-2 top-2 bg-red-800">
                ✕
              </button>
            </Link>
          </div>
          <div>
            <div className="flex flex-col my-5 gap-1">
              <span>Name</span>
              <input
                type="text"
                placeholder="enter name"
                {...register("fullname", { require: true })}
              />
            </div>

            <div className="flex flex-col my-5 gap-1">
              <span>Email</span>
              <input
                type="email"
                placeholder="enter email"
                {...register("email", { require: true })}
              />
            </div>

            <div className="flex flex-col my-5 gap-1">
              <span>Password</span>
              <input
                type="text"
                placeholder="enter password"
                {...register("password", { require: true })}
              />
            </div>

            <div className="flex gap-32">
              <button className="py-1 bg-lime-800 px-2 rounded-md hover:bg-lime-600">
                SignUp
              </button>
              <p>
                Have account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  {" "}
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
