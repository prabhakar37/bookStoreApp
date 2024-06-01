import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center ">
        <div
          id="my_modal_3"
          className=" flex rounded-lg border-[1px]  shadow-lg shadow-slate-100 hover:bg-slate-800"
        >
          <div className="px-8 py-10 ">
            <form method="div">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">SignUp</h3>
                <Link to= "/">
                  <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                </Link>
              </div>
              {/* if there is a button in form, it will close the modal */}

              <div className="text-white">
                <div className="flex flex-col my-5">
                  <span className="mb-2">Name</span>
                  <input type="text" required placeholder="enter name" />
                </div>

                <div className="flex flex-col my-5">
                  <span className="mb-2">Email</span>
                  <input type="email" required placeholder="enter email" />
                </div>

                <div className="flex flex-col my-5 ">
                  <span className="mb-2">Password</span>
                  <input type="value" required placeholder="password" />
                </div>

                <div className="flex justify-between gap-10 mt-10">
                  <button className="bg-pink-500 py-1 px-2 rounded-md">
                    SignUp
                  </button>
                  <p>
                    Have account?{" "}
                    <Link
                      to="/"
                      className="underline text-blue-500 cursor-pointer"
                    >
                      LogIn
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
