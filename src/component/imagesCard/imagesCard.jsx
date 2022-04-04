/* eslint-disable react/prop-types */
import React from "react";
import noimg from "../../assets/images/Noimg.png";

const ImageCard = ({ data }) => {
  const checkImage = data.attributes.image.data;
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            checkImage !== null
              ? data?.attributes.image.data[0].attributes.url
              : noimg
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="h-72 w-72 overflow-hidden"
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
