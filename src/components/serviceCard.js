import React from "react";
import { handleOnClick } from "./navbar";

export const ServiceCard = (props) => {
  return (
    <div className="flex flex-row flex-wrap w-80 justify-around">
      <div className="w-60 bg-base-100 shadow-xl text-black rounded-bl-[60px] rounded-br-[10px] rounded-tl-[15px] rounded-tr-[60px]">
        <img
          className="max-h-[12rem] m-auto mt-2 w-5/6 rounded-bl-[50px] rounded-tr-[50px] rounded-br-[10px] rounded-tl-[15px]"
          src={props.image}
          alt="Shoes"
        />
        <div className="h-36">
          <h2 className="card-title justify-center mt-2">{props.title}</h2>
          <p className="text-sm w-4/5 text-center m-auto mt-3">
            {props.description}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <button className="btn btn-accent" onClick={()=> handleOnClick(props.id)}>Me Interesa</button>
      </div>
    </div>
  );
};

export default ServiceCard;
