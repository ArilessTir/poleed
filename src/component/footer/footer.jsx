import React from "react";
import logo from "../../assets/images/Logo.png";
import NavigationLink from "../navigationLink/navigationLink";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import navlist from "../../services/navigation";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col justify-center place-items-start md:items-center overflow-hidden">
      <img src={logo} className="py-4" />
      <ul className=" text-white py-5 space-y-3 flex text-3xl flex-col md:flex-row md:space-x-12 md:text-lg md:space-y-0 ">
        {navlist.map(item => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="w-screen md:w-full py-1 text-xl">
              <NavigationLink data={item} key={item.id} />
              <span className="h-0.5 md:bg-black bg-white w-full block"></span>
            </div>
          );
        })}
      </ul>
      <div className="space-x-5 py-5 flex  w-full justify-center">
        <a className="cursor-pointer" href="#">
          <BsInstagram size={30} />
        </a>
        <a className="cursor-pointer" href="#">
          <BsYoutube size={30} className="hover:text-red-600" />
        </a>{" "}
        <a className="cursor-pointer" href="#">
          <BsSpotify size={30} className="hover:text-green-600" />
        </a>
      </div>
      <p className="text-sm py-2 text-center w-full">
        @ Polaroid 2018 | Tout droit reservé
      </p>
    </div>
  );
};

export default Footer;
