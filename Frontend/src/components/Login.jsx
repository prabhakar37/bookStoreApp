import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("loggedin successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000)
        }
      })

      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
          setTimeout(() => {},2000)
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal rounded-md">
        <div className="modal-box " onSubmit={handleSubmit(onSubmit)}>
          <form method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">LogIn</h3>
            <div className="text-white"> 
              <div className="flex flex-col my-5">
                <span className="mb-2">Email</span>
                <input
                  type="email"
                  placeholder="enter your email"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="flex flex-col my-5 ">
                <span className="mb-2">Password</span>
                <input
                  type="value"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
              </div>

              <div className="flex justify-between mt-8">
                <button
                  className="bg-pink-500 py-1 px-2 rounded-md "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  Login
                </button>

                <div>
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    SignUp
                  </Link>{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
