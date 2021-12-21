import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import logo from "../../assets/images/Logo.png";
import NavigationLink from "../navigationLink/navigationLink";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import navlist from "../../services/navigation";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  const location = useLocation();

  // handle menu state when it is opened
  useEffect(() => {
    if (burger == true) {
      setBurger(!burger);
    }
  }, [location.pathname]);

  return (
    <section className="w-full bg-black ">
      <nav className="max-w-8xl mx-auto flex items-center  px-5 py-2 max-w-screen-hd">
        <Link to={""} className="z-50">
          <img src={logo} alt="" className="max-w-full" />
        </Link>

        <ul className="space-x-5 text-white ml-10 mt-4 hidden md:flex">
          {navlist.map(item => {
            return (
              // eslint-disable-next-line react/jsx-key
              <NavigationLink data={item} />
            );
          })}
        </ul>
        <div className="space-x-5 ml-auto mt-4 hidden md:flex">
          <a className="cursor-pointer" href="#">
            <BsInstagram size={30} className="text-white" />
          </a>
          <a className="cursor-pointer" href="#">
            <BsYoutube size={30} className="hover:text-red-600 text-white" />
          </a>{" "}
          <a className="cursor-pointer" href="#">
            <BsSpotify size={30} className="hover:text-green-600 text-white" />
          </a>
        </div>

        <div className="flex space-x-5 ml-auto z-50 md:hidden">
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
              ? "md:hidden fixed flex flex-col overflow-y-scroll bg-black top-0 right-0 min-h-screen w-full transition-all duration-700 z-40 px-10"
              : "bg-black top-0 -right-full overflow-y-scroll w-full transition-all min-h-screen absolute z-40 duration-700 "
          }
        >
          <div className="h-screen">
            <ul className="flex flex-col space-y-12 text-left text-white mt-40 text-xl uppercase ">
              {navlist.map(item => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <NavigationLink data={item} />
                );
              })}
            </ul>
            <span className="h-0.5 mr-auto my-20 bg-white w-full block"></span>
            <div className="flex space-x-5 content-center my-10">
              <a className="cursor-pointer" href="#">
                <BsInstagram size={30} className="text-white" />
              </a>
              <a className="cursor-pointer" href="#">
                <BsYoutube
                  size={30}
                  className="hover:text-red-600 text-white"
                />
              </a>{" "}
              <a className="cursor-pointer" href="#">
                <BsSpotify
                  size={30}
                  className="hover:text-green-600 text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
