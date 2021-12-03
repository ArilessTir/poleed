import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };
  return (
    <section className="w-full bg-black">
      <nav className="max-w-8xl mx-auto flex items-center px-5 py-2">
        <img src={logo} alt="" className="max-w-full" />
        <ul className="space-x-5 text-white ml-10 mt-4 hidden md:flex">
          <li>
            <a href="">Evenements</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Projets</a>
          </li>
          <li>
            <a href="">Artistes</a>
          </li>
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
        <div
          className={
            burger
              ? "flex flex-col items-center absolute bg-black top-0 right-0 w-full mt-20"
              : "hidden"
          }
        >
          <ul className="flex flex-col space-y-5 text-white  mt-4 text-center ">
            <li>
              <a href="">Evenements</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Projets</a>
            </li>
            <li>
              <a href="">Artistes</a>
            </li>
          </ul>
          <div className="flex space-x-5 py-5">
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
