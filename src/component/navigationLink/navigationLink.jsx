/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ data }) => {
  return (
    <NavLink
      to={`${data.direction}`}
      className={navdata =>
        navdata.isActive ? "font-bold" : " hover:text-red-600 transition"
      }
    >
      {data.name}
    </NavLink>
  );
};

export default NavigationLink;
