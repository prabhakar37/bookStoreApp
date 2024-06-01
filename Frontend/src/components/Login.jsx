import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal rounded-md">
        <div className="modal-box ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </Link>
          </form>
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
              <button className="bg-pink-500 py-1 px-2 rounded-md">
                Login
              </button>
              <div>
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  SignUp
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
