/* eslint-disable react/prop-types */
import React from "react";

const EventCardSkeleton = () => {
  return (
    <div
      className="group rounded-xl cursor-pointer
      bg-black text-white p-5 h-96"
    >
      <div className="flex flex-col gap-4 w-full h-full animate-pulse">
        <div className="h-1/2 bg-gray-400 rounded-md"></div>
        <div className="h-1/2 space-y-2 ">
          <div className="h-10 w-full bg-gray-400 rounded-md"></div>
          <div className="h-10 w-2/3 bg-gray-400 rounded-md"></div>
          <div className="h-10 w-1/3 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
