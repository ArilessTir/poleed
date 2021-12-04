/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ data }) => {
  return (
    <Link
      to={`${data.direction}`}
      className=" hover:text-red-600 transition-all cursor-pointer"
    >
      {data.name}
    </Link>
  );
};

export default NavigationLink;
