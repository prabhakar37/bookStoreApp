import React, { useEffect, useState } from "react";
import { Login } from "./Login";
import { useAuth } from "../context/AuthProvider";

import Logout from "./Logout";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        {" "}
        <a href="/">Home</a>{" "}
      </li>
      <li>
        {" "}
        <a href="/course">Course</a>{" "}
      </li>
      <li>
        {" "}
        <a href="/contact">Contact</a>{" "}
      </li>
      <li>
        {" "}
        <a>About</a>{" "}
      </li>
    </>
  );

  return (
    <div
      className={`z-[999] ${
        sticky
          ? "shadow-md bg-blue-300 duration-300 transition-all ease-in-out"
          : ""
      } `}
    >
      <div className="navbar bg-slate-500 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">Book Store</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
        </div>

        {authUser ? (
          <Logout />
        ) : (
          <div className="">
            <a
              className="bg-black px-3 py-2 ml-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </a>
            <Login />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
