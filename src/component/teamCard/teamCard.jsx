import React from "react";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ img, name, job }) => {
  return (
    <div className="group flex flex-col">
      <div className="h-80 w-80 bg-gray-400 overflow-hidden md:h-96 md:w-96">
        <img
          src={img}
          alt=""
          className="group-hover:scale-11 w-full max-h-full object-cover transition-all "
        />
      </div>
      <h1 className="text-xl"> {name}</h1>
      <p className="opacity-50"> {job}</p>
    </div>
  );
};

export default TeamCard;
