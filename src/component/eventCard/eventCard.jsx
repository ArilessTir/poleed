/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
const EventCard = ({ size, classe, data, path = "" }) => {
  return (
    <>
      <div
        className={`group  cursor-pointer
     flex flex-col bg-gray-900 text-white px-5 ${size} ${classe}`}
      >
        {" "}
        <div className="h-1/2 overflow-hidden">
          <img
            src={`${data?.attributes.images.data[0].attributes.url}`}
            alt="Concert"
            className=" pt-5 rounded-xl w-full max-h-full object-cover transition-all group-hover:scale-11  "
          />
        </div>
        <div className=" h-1/2 overflow-hidden">
          <h1 className="text-2xl font-bold py-2"> {data?.attributes.name} </h1>
          <h1 className="font-bold pb-4">
            {new Date(data?.attributes.date).toLocaleDateString("fr")}
          </h1>
          <p className="">{data?.attributes.description}</p>
        </div>
        <Link
          to={`${path}${data?.id}`}
          className="flex justify-end items-center w-full py-2 bottom-0 bg-gray-900"
        >
          <p className=" group-hover:tracking-md group-hover:text-red-500 transition-all">
            Detail
          </p>
          <BsArrowRightShort className="group-hover:text-red-500" size={38} />
        </Link>{" "}
      </div>
    </>
  );
};

export default EventCard;
