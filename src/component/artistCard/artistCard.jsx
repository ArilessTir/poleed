/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

const ArtistCard = ({ data }) => {
  return (
    <Link to={`${data?.id}`}>
      <div className="group w-72 h-96 rounded-lg cursor-pointer flex items-end my-10 overflow-hidden solid border-2 relative ">
        <img
          src={`${process.env.REACT_APP_API_URL}${data?.attributes.images.data[0].attributes.url}`}
          alt=""
          className="h-full w-full absolute rounded-md transform hover:scale-110 transition-all "
        />
        <div className="flex justify-between items-center px-5 py-5 w-full z-10">
          <div>
            <h1 className="text-white text-2xl font-bold uppercase leading-6">
              {data?.attributes.name}
            </h1>
            <span className="h-0.5 bg-white w-1/2 block rounded-md "></span>
            <p className="text-white uppercase m-0.5">
              {" "}
              {data?.attributes.occupation}
            </p>
          </div>

          <BsArrowRightCircle size={32} className="text-white" />
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
