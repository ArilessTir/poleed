import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import logo from "../../assets/images/Logo.png";
import NavigationLink from "../navigationLink/navigationLink";
const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  const location = useLocation();

  useEffect(() => {
    if (burger == true) {
      setBurger(!burger);
    }
  }, [location.pathname]);

  const navlist = [
    { name: "Evenements", direction: "/" },
    { name: "Contact", direction: "/" },
    { name: "Projets", direction: "/" },
    { name: "Artistes", direction: "/artiste" }
  ];
  return (
    <section className="w-full bg-black ">
      <nav className="max-w-8xl mx-auto flex items-center px-5 py-2">
        <img src={logo} alt="" className="max-w-full z-10" />
        <ul className="space-x-5 text-white ml-10 mt-4 hidden md:flex">
          {navlist.map(item => {
            return (
              // eslint-disable-next-line react/jsx-key
              <NavigationLink data={item} />
            );
          })}
        </ul>
        <div className="space-x-5 ml-auto mt-4 hidden md:flex">
          <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
          <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
          <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
        </div>

        <div className="flex space-x-5 ml-auto z-10 md:hidden">
          {burger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-14 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              onClick={toggleBurger}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-14 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              onClick={toggleBurger}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        {/********* Responsive navbar *********/}
        <div
          className={
            burger
              ? "md:hidden flex flex-col absolute bg-black top-0 right-0 h-screen w-full transition-all pl-10"
              : "hidden bg-black top-0 -right-full w-full transition-all"
          }
        >
          <ul className="flex flex-col space-y-16 text-white mt-44 text-left text-3xl uppercase ">
            {navlist.map(item => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <NavigationLink data={item} />
                  <span className="h-0.5 bg-white w-full block mt-2 "></span>
                </div>
              );
            })}
          </ul>
          <div className="flex absolute space-x-5 py-5 bottom-10">
            <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
            <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
            <div className="bg-white w-6 h-6 rounded-md cursor-pointer"></div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
