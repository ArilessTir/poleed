import React from "react";
import logo from "../../assets/images/Logo.png";
import NavigationLink from "../navigationLink/navigationLink";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import navlist from "../../services/navigation";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white flex flex-col justify-center place-items-start md:items-center overflow-hidden">
      <img src={logo} className="py-4  w-32 h-18" />
      <ul className="text-white py-5 space-y-3 flex flex-col md:flex-row md:space-x-12 md:space-y-0 ">
        {navlist.map(item => {
          return (
            <div className="w-screen md:w-auto text-xl" key={item.id}>
              <NavigationLink data={item} />
              <span className="h-0.5 md:bg-gray-900 bg-white w-full block"></span>
            </div>
          );
        })}
      </ul>
      <div className="space-x-5 py-5 flex  w-full justify-center">
        <a className="cursor-pointer" href="#">
          <BsInstagram size={30} />
        </a>
        <a className="cursor-pointer" href="#">
          <BsYoutube size={30} className="" />
        </a>{" "}
        <a className="cursor-pointer" href="#">
          <BsSpotify size={30} className="" />
        </a>
      </div>
      <p className="text-sm py-2 text-center w-full">
        @ Polaroid 2018 | Tout droit reservé
      </p>
    </div>
  );
};

export default Footer;
