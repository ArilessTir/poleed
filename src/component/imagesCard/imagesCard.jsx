/* eslint-disable react/prop-types */
import React from "react";
import noimg from "../../assets/images/Noimg.png";

const ImageCard = ({ data }) => {
  const url = process.env.REACT_APP_API_URL;
  const checkImage = data.attributes.image.data;
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            checkImage !== null
              ? url + data?.attributes.image.data[0].attributes.url
              : noimg
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="h-72 w-72 bg-green-900"
      ></div>
      <h2>@{data?.attributes.artiste}</h2>
      <a href={data?.attributes.link} target="_blank" rel="noreferrer">
        {" "}
        Insta/SitePerso
      </a>
    </div>
  );
};

export default ImageCard;
