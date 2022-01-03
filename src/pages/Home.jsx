import React, { useEffect, useState } from "react";
import home_img from "../assets/images/home.png";
import home_img2 from "../assets/images/home2.jpg";
import home_img3 from "../assets/images/home3.jpg";
import EventCardSkeleton from "../component/eventCardSkeleton/eventCardSkeleton";
import EventCard from "../component/eventCard/eventCard";
import { get_events } from "../services/eventAPI";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    fetchAllEvent();
  }, []);

  const fetchAllEvent = async () => {
    const data = await get_events(setIsLoading);
    setData(data);
  };

  return (
    <section className="">
      <section className="h-screen bg-black flex md:px-20">
        <div className="space-y-4 my-auto ">
          <div className="flex items-center space-x-2">
            <span className="w-10 h-1 bg-white"></span>
            <p className="text-white">Poleed Industry</p>
          </div>
          <h1 className=" text-white text-6xl uppercase font-bold tracking-wide leading-tight ">
            Promotion <br />
            Artistique
          </h1>
          <p className="text-white">
            Association Roubaisienne d’accompagnement artistique et production.{" "}
          </p>
          <button className="py-3 px-6 font-bold text-black bg-white rounded-md">
            Rejoins nous
          </button>
        </div>

        <div className="w-1/2 my-auto hidden">
          <div className="grid grid-cols-2 grid-rows-2 bg-red-700 gap-4 max-h-screen">
            <img
              src={home_img}
              alt=""
              className="row-start-1 row-end-3 w-full h-full"
            />
            <img src={home_img2} alt="row-start-1 row-end-3 w-full h-full" />
            <img src={home_img3} alt="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="text-center ">
        <h1 className=" text-center py-10 text-4xl font-bold">
          A propos de nous
        </h1>
        <p className=" max-w-2xl mx-auto">
          Poleed est une association de promotion artistique Roubaisienne. Elle
          est spécialisée dans l’accompagnement d’artiste. Elle organise des
          actions culturel et intervient dans le cadre d’initiation au monde de
          la musique.{" "}
        </p>
        {/* <div className="flex flex-wrap justify-center space-x-5 py-10">
          <div className=" h-80 w-80 bg-gray-400 transform translate-y-3"></div>
          <div className="h-80 w-80 bg-gray-400 transform -translate-y-3"></div>
        </div> */}
      </section>

      <section className="">
        <h1 className="text-center py-10 text-4xl font-bold"> Au programme </h1>
        <section className="grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 px-16 max-w-screen-hd mx-auto ">
          {isLoading ? <EventCardSkeleton /> : <EventCard data={data[0]} />}
        </section>
      </section>
    </section>
  );
};

export default Home;
