/* eslint-disable react/prop-types */
import React from "react";

const ArtistCardSkeleton = () => {
  return (
    <div className="w-72 h-96 rounded-lg  my-10 solid border-2 bg-black ">
      <div className="flex flex-col space-y-6 animate-pulse">
        <div className=" h-24 w-24 bg-gray-400 rounded-full mx-auto my-8"></div>
        <div className="h-1/2 space-y-2">
          <div className="h-6 w-10/12 bg-gray-400 rounded-md mx-auto"></div>
          <div className="h-6 w-2/3 bg-gray-400 rounded-md mx-auto"></div>
          <div className="h-6 w-1/3 bg-gray-400 rounded-md mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCardSkeleton;
