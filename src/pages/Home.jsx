import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import home_about1 from "../assets/images/home_about1.jpg";
import home_about2 from "../assets/images/home_about2.jpg";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";

import EventCardSkeleton from "../component/eventCardSkeleton/eventCardSkeleton";
import EventCard from "../component/eventCard/eventCard";
import { get_events } from "../services/eventAPI";
import { BsArrowRightShort } from "react-icons/bs";
import TeamCard from "../component/teamCard/teamCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tab = [...Array(3).keys()];
  useEffect(async () => {
    fetchAllEvent();
  }, []);

  const fetchAllEvent = async () => {
    const data = await get_events(setIsLoading);
    setData(data);
  };

  return (
    <section className="font-Bebas">
      <section className="h-screen bg-gray-900 flex md:px-20">
        <div className="space-y-4 my-auto ">
          <div className="flex items-center space-x-2">
            <span className="w-10 h-1 bg-white"></span>
            <p className="text-white">Poleed Industry</p>
          </div>
          <h1 className=" text-white text-8xl font-bold tracking-wide leading-tight ">
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

        <div className="w-1/2 my-auto hidden"></div>
      </section>
      <section className="py-10 px-10 max-w-screen-hd mx-auto">
        <div className="flex md:flex-row flex-col-reverse gap-8 justify-center ">
          <div className="md:w-1/2 w-full ">
            <img
              src={home_about1}
              alt=""
              className="max-w-full hidden md:inline"
            />
            <p className="text-center text-2xl md:max-w-sm md:text-left  md:mt-5">
              Poleed est une association de promotion artistique Roubaisienne.
              Elle est spécialisée dans l’accompagnement d’artiste.
            </p>
          </div>
          <div className="md:w-1/2 ">
            <h1 className="text-7xl font-bold text-center md:text-left">
              A propos <br /> de nous
            </h1>
            <img src={home_about2} alt="" className="max-w-full" />
          </div>
        </div>
      </section>

      <section className="my-10 px-10 max-w-screen-hd mx-auto ">
        <h1 className="py-10 text-7xl font-bold"> Au programme </h1>
        {isLoading ? (
          <section className=" mx-auto space-y-10md:space-y-0 ">
            <div className="md:pr-16 flex flex-wrap w-full gap-5 justify-center ">
              {tab.map(item => {
                return <EventCardSkeleton width={"w-96"} key={item} />;
              })}
            </div>
            <div className="text-xl flex flex-col justify-center items-center space-y-4 text-center">
              <p className="font-bold mt-5">
                Poleed organise plusieurs évènements au cours de l’année.
                Concerts, ateliers, sessions studio, entre autres...{" "}
              </p>
              <Link
                to={"event"}
                className=" text-red-600 flex items-center mx-auto md:mx-0 hover:text-red-700 cursor-pointer"
              >
                <p className=" text-xl "> Voir tous nos evenements</p>
                <BsArrowRightShort size={38} />
              </Link>
            </div>
          </section>
        ) : (
          <section className="max-w-screen-hd mx-auto space-y-10md:space-y-0 ">
            <div className="md:pr-16 flex flex-wrap w-full gap-5 justify-center ">
              {data.slice(0, 3).map(item => {
                return (
                  <EventCard data={item} size={"h-96 w-96"} key={item.id} />
                );
              })}
            </div>

            <div className="text-xl flex flex-col justify-center items-center space-y-4 text-center">
              <p className="font-bold mt-5">
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

      <section className="my-10 px-10">
        <h1 className="text-7xl font-bold max-w-screen-hd mx-auto my-10">
          {" "}
          Nos services
        </h1>
        <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  mx-auto max-w-5xl text-white md:grid-flow-col-dense">
          <div className=" bg-blue-300 text-7xl md:row-start-1 md:row-end-3 md:h-96 h-64">
            Studio de music
          </div>
          <div className=" bg-gray-900 relative h-64">
            <p className="absolute text-9xl top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50 font-bold">
              PO
            </p>
          </div>
          <div className=" bg-gray-300 h-64 text-7xl md:row-start-2 md:row-end-4 md:h-96 ">
            Aide & partage
          </div>

          <div className=" bg-gray-900 relative h-64 font-bold ">
            <p className="absolute text-9xl top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50">
              LE
            </p>
          </div>
          <div className=" bg-red-400 h-64 text-7xl md:row-start-1 md:row-end-3 md:h-96 ">
            Figuration
          </div>
          <div className=" bg-gray-900 relative h-64 font-bold ">
            <p className="absolute text-9xl top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50">
              ED
            </p>
          </div>
        </section>
      </section>

      <section className="my-10 px-10 ">
        <h1 className="text-7xl font-bold max-w-screen-hd mx-auto my-10">
          {" "}
          Notre Equipe
        </h1>
        <section className="flex w-full gap-5 overflow-x-scroll lg:justify-center">
          <TeamCard name={"Ilyes Bensalem"} job={"Président"} img={team3} />
          <TeamCard name={"Denis Moore"} job={"Tresorier"} img={team2} />
          <TeamCard name={"Un mec super"} job={"job"} img={team1} />
        </section>
      </section>

      <section className="my-10 px-10 flex flex-1 flex-col mx-auto max-w-7xl">
        <div className=" space-y-5 my-10 ">
          <h1 className=" text-4xl mb-2">
            Prêt à devenir <br /> Poleed ?
          </h1>
          <Link
            to={"contact"}
            className="bg-gray-900 px-5 py-2 cursor-pointer text-white"
          >
            {" "}
            Contactes nous !{" "}
          </Link>
        </div>
        <div className=" space-y-5 text-xl md:max-w-4xl">
          <p>
            Notre but principale est le développement et la promotion
            artistique. Pour cela nous suivons des artistes dans le
            développement de leurs projets en offrant un accès à la production.{" "}
          </p>
          <p>
            On trouve notre essence dans des programmes de réussite citoyenne
            autour de l’audio-visuelle.{" "}
          </p>
        </div>
      </section>
    </section>
  );
};

export default Home;
