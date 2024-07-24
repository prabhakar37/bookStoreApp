import React from "react";
import Banimg from "../assets/react.svg";

export const Banner = () => {
  return (
    <div className="w-full flex pt-24 px-[5rem] gap-5">
      <div className="left w-1/2">
        <div className="text-5xl pb-12">
          <h1>Hello, welcome here to learn</h1>
          <h1>s
            something <span>new everyday</span>{" "}
          </h1>
        </div>

        <div className="pb-10 text-xl">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quo magni maiores id saepe quidem necessitatibus beatae dolorem
            ipsam sapiente!
          </p>
        </div>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <button className="btn btn-secondary my-10">Get Started</button>
      </div>

      <div className="right w-1/2">
        <div className="bg-sky-600">
          <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1716613285~exp=1716616885~hmac=e62731c10b2a40860f319efa8c58484b6b76d4b31d0c1391882590c0493fbbf8&w=1060" alt="" />
        </div>
      </div>
    </div>
  );
};
