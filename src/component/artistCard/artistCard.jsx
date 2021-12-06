/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = ({ data }) => {
  return (
    <Link to={`${data.id}`}>
      <div
        style={{
          backgroundImage: `url('http://localhost:1337${data.attributes.images.data[0].attributes.url}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="w-72 h-96 rounded-lg cursor-pointer flex items-end my-10 hover:110% solid border-2"
      >
        <div className="flex justify-between items-center px-5 py-5 w-full ">
          <div>
            <h1 className="text-white text-2xl font-bold uppercase leading-6">
              {data.attributes.name}
            </h1>
            <span className="h-0.5 bg-white w-1/2 block rounded-md "></span>
            <p className="text-white uppercase m-0.5">
              {" "}
              {data.attributes.occupation}
            </p>
          </div>

          <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
