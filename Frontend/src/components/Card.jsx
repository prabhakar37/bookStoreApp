import React from "react";

function Card({ item }) {
  // item from parent received here

  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{item.price}</div>
            <div className="badge badge-outline hover:bg-blue-500 hover:text-pink-400 duration-200 ">Buy now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
