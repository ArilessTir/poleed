/* eslint-disable react/prop-types */
import React from "react";

const EventCardSkeleton = ({ width, classe }) => {
  return (
    <>
      <div className={`p-5 h-96 cursor-pointer bg-gray-900 ${width} ${classe}`}>
        <div className=" space-y-6 w-full h-full animate-pulse">
          <div className="h-1/2 bg-gray-400 rounded-md"></div>
          <div className="h-1/2 space-y-2 ">
            <div className="h-10 w-full bg-gray-400 rounded-md"></div>
            <div className="h-10 w-2/3 bg-gray-400 rounded-md"></div>
            <div className="h-10 w-1/3 bg-gray-400 rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCardSkeleton;
