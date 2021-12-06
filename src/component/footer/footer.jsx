import React from "react";
import logo from "../../assets/images/Logo.png";
import NavigationLink from "../navigationLink/navigationLink";

const Footer = () => {
  const navlist = [
    { name: "Evenements", direction: "/" },
    { name: "Contact", direction: "/" },
    { name: "Projets", direction: "/" },
    { name: "Artistes", direction: "/artiste" }
  ];
  return (
    <div className="w-full bg-black text-white flex flex-col justify-center place-items-start md:items-center overflow-hidden">
      <img src={logo} className="py-4" />
      <ul className=" text-white py-5 space-y-3 flex text-3xl flex-col md:flex-row md:space-x-12 md:text-lg md:space-y-0 ">
        {navlist.map(item => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="w-screen md:w-full py-1">
              <NavigationLink data={item} />
              <span className="h-0.5 md:bg-black bg-white w-full block"></span>
            </div>
          );
        })}
      </ul>
      <div className="space-x-5 py-5 flex  w-full justify-center">
        <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
        <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
        <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
      </div>
      <p className="text-sm py-2 text-center w-full">
        @ Polaroid 2018 | Tout droit reservé
      </p>
    </div>
  );
};

export default Footer;
