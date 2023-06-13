import React from "react";

const Avatar = (props) => {
  return (
    <div className="text-black w-72 md:w-96 lg:w-[500px] mb-4">
      <div className="avatar text-black">
        <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={props.image} alt="profilePicture" />
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-center mt-4">{props.name}</p>
        <p className="text-sm">{props.text}</p>
      </div>
    </div>
  );
};

export default Avatar;
