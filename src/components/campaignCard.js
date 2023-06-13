import React from "react";
import "animate.css";

export const CampaignCard = (props) => {
  return (
    <div
      className="min-h-[220px] text-black shadow-xl w-80 bg-white justify-around rounded-bl-[50px] rounded-tr-[50px] rounded-br-[10px] rounded-tl-[15px] p-2
    animate__animated animate__fadeInUp"
    >
      <div className="flex flex-column justify-evenly mt-2 w-full content-center">
        <div className="w-3/5">
          <h2>{props.title}</h2>
        </div>
        <div>
          <img className="max-h-[2rem]" src={props.image} alt="Shoes" />
        </div>
      </div>
      <div className="text-sm m-auto mt-2 w-7/8 bg-base-100 text-black">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default CampaignCard;
