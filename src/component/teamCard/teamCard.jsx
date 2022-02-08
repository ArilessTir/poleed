import React from "react";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ img, name, job }) => {
  return (
    <div className="group flex flex-col">
      <div className="h-80 w-72 md:h-96 md:w-80 overflow-hidden">
        <img src={img} alt="" className="w-full max-h-full object-cover" />
      </div>
      <h1 className="text-xl"> {name}</h1>
      <p className="opacity-50"> {job}</p>
    </div>
  );
};

export default TeamCard;
