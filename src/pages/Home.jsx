import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home_img from "../assets/images/home.png";
import home_img2 from "../assets/images/home2.jpg";
import home_img3 from "../assets/images/home3.jpg";
import home_about1 from "../assets/images/home_about1.png";
import home_about2 from "../assets/images/home_about2.png";
import EventCardSkeleton from "../component/eventCardSkeleton/eventCardSkeleton";
import EventCard from "../component/eventCard/eventCard";
import { get_events } from "../services/eventAPI";
import { BsArrowRightShort } from "react-icons/bs";

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
      <section className="h-screen bg-gray-900 flex md:px-20">
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
          <Link to="contact">
            <button className="mt-10 py-3 px-6 font-bold text-black bg-white rounded-md">
              Rejoins nous
            </button>
          </Link>
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
        <div className="flex flex-wrap justify-center space-x-5 py-10">
          <div className=" h-80 w-96 transform  translate-y-3 bg-gray-900">
            <img className=" object-cover h-full w-full" src="" alt="" />
          </div>
          <div className=" h-80 w-96 transform  -translate-y-3 bg-gray-900">
            <img className=" object-cover h-full w-full" src="" alt="" />
          </div>
        </div>
      </section>

      <section className="my-10">
        <h1 className="text-center py-10 text-4xl font-bold"> Au programme </h1>
        {isLoading ? (
          <section className="max-w-screen-hd mx-auto space-y-10 md:flex md:space-y-0 ">
            <div className=" w-1/2 mx-auto md:flex md:justify-end md:pr-16 mx ">
              <EventCardSkeleton width={"w-96"} />
            </div>

            <div className="text-xl flex flex-col justify-center space-y-4 md:w-1/2">
              <p className="mx-auto w-1/2 font-bold md:mx-0">
                Poleed organise plusieurs évènements au cours de l’année.
                Concerts, ateliers, sessions studio, entre autres...{" "}
              </p>
              <Link
                to={"event"}
                className="text-red-600 flex items-center mx-auto md:mx-0 hover:text-red-700"
              >
                <p className=" text-lg "> Voir tous nos evenements</p>
                <BsArrowRightShort size={38} />
              </Link>
            </div>
          </section>
        ) : (
          <section className="max-w-screen-hd mx-auto space-y-10 md:flex md:space-y-0 ">
            <div className=" w-1/2 mx-auto md:max-w-xl md:flex md:justify-end md:pr-16 ">
              <EventCard data={data[0]} size={"h-96 w-96"} />
            </div>

            <div className="text-xl flex flex-col justify-center space-y-4 md:w-1/2">
              <p className="mx-auto max-w-md font-bold md:mx-0">
                Poleed organise plusieurs évènements au cours de l’année.
                Concerts, ateliers, sessions studio, entre autres...{" "}
              </p>
              <Link
                to={"event"}
                className="text-red-600 flex items-center mx-auto md:mx-0 hover:text-red-700"
              >
                <p className=" text-lg "> Voir tous nos evenements</p>
                <BsArrowRightShort size={38} />
              </Link>
            </div>
          </section>
        )}
      </section>
    </section>
  );
};

export default Home;
