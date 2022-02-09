import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import home_about1 from "../assets/images/home_about1.jpg";
import home_about2 from "../assets/images/home_about2.jpg";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import bens from "../assets/artistes/Bensou.jpg";

import EventCardSkeleton from "../component/eventCardSkeleton/eventCardSkeleton";
import EventCard from "../component/eventCard/eventCard";
import TeamCard from "../component/teamCard/teamCard";

import { get_events } from "../services/eventAPI";
import {
  BsArrowRightShort,
  BsChevronCompactRight,
  BsChevronCompactLeft
} from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tab = [...Array(3).keys()];

  const fetchAllEvent = async () => {
    const data = await get_events(setIsLoading);
    setData(data);
  };

  useEffect(async () => {
    fetchAllEvent();

    const tl = gsap.timeline();

    tl.from("section .title", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.1,
      stagger: {
        amount: 0.5
      }
    }).from("section .title .line", {
      width: 0
    });

    gsap.from(".img", {
      width: 0,
      duration: 1,
      delay: 0.2
    });

    // tl_about.from(".about .about__left", {
    //   x: -50,
    //   opacity: 0,
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: ".about",
    //     start: "top center +=100",
    //     markers: true
    //   }
    // });
  }, []);

  return (
    <section className="font-Bebas">
      <section className="min-h-screen bg-gray-900 flex mt-20 mx-auto max-w-screen-hd">
        <div className="w-full space-y-10  md:w-1/2 lg:1/3 lg:pl-24 pl-5 my-auto z-30 ">
          <div className="title flex items-center space-x-2">
            <span className="line w-10 h-1 bg-white"></span>
            <p className="text-white">Poleed Industry</p>
          </div>
          <h1 className="title text-white sm:text-8xl md:text-9xl text-7xl font-bold tracking-wide leading-tight ">
            Promotion <br />
            Artistique
          </h1>
          <p className="title text-white">
            Association Roubaisienne d’accompagnement artistique et production.{" "}
          </p>
          <Link className="title" to="contact">
            <button className="mt-5 mb-2 py-3 px-6 font-bold text-black bg-white rounded-md">
              Rejoins nous
            </button>
          </Link>
        </div>

        <div className="w-2/3 relative hidden md:flex md:gap-6 ">
          <div className="lg:w-1/2 w-full flex flex-col  ">
            <div
              className="img my-auto"
              style={{
                backgroundImage: `url(${bens})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "700px",
                width: "100%",
                backgroundPosition: "center"
              }}
            ></div>
          </div>

          <div className="w-1/2 my-auto hidden flex-col gap-6 lg:flex">
            <div
              className="img relative"
              style={{
                backgroundImage: `url(${home_about2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "335px",
                maxWidth: "100%",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              className="img relative"
              style={{
                backgroundImage: `url(${home_about1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "335px",
                maxWidth: "100%",
                backgroundPosition: "center"
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="about py-10 px-10 max-w-screen-2xl mx-auto ">
        <div className="flex  md:flex-row-reverse flex-col-reverse gap-8 justify-center ">
          <div className="about__right md:w-1/2 w-full ">
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
          <div className="about__left md:w-1/2">
            <h1 className="sm:text-6xl text-4xl font-bold text-center md:text-left">
              A propos de nous
            </h1>

            <img src={home_about2} alt="" className="max-w-full" />
          </div>
        </div>
      </section>

      <section className="my-10 px-10 relative max-w-screen-2xl mx-auto">
        <h1 className="sm:text-6xl text-4xl font-bold my-10"> Au programme </h1>
        <BsChevronCompactRight
          className="md:hidden text-gray-300 absolute top-1/2  right-6 transform translate-x-1/2 -translate-y-3/4 cursor-pointer z-10"
          size={50}
          onClick={() => {
            const sec = document.getElementById("section_prgm");
            sec.scrollBy({ left: 150, behavior: "smooth" });
          }}
        />
        <BsChevronCompactLeft
          className="md:hidden text-gray-300 absolute top-1/2 -left-6 transform translate-x-1/2 -translate-y-3/4 cursor-pointer z-10"
          size={50}
          onClick={() => {
            const sec = document.getElementById("section_prgm");
            sec.scrollBy({ left: -150, behavior: "smooth" });
          }}
        />
        {isLoading ? (
          <section
            id="section_prgm"
            className="flex  w-full gap-5 overflow-x-scroll overflow-y-hidden lg:justify-center h-full"
          >
            {tab.map(item => {
              return (
                <div key={item}>
                  <EventCardSkeleton width={"md:w-80 w-72"} />
                </div>
              );
            })}
          </section>
        ) : (
          <section
            id="section_prgm"
            className="flex w-full gap-5 overflow-x-scroll overflow-y-hidden lg:justify-center h-full "
          >
            {data.slice(0, 3).map(item => {
              return (
                <div key={item.id}>
                  <EventCard
                    path={"event/"}
                    data={item}
                    size={"md:h-96 md:w-80 h-96 w-80"}
                  />
                </div>
              );
            })}
          </section>
        )}
        <div className="text-xl flex flex-col justify-center items-center space-y-4 text-center">
          <p className="font-bold mt-5">
            Poleed organise plusieurs évènements au cours de l’année. Concerts,
            ateliers, sessions studio, entre autres...{" "}
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

      <section className="my-10 px-10 max-w-screen-2xl mx-auto">
        <h1 className="sm:text-6xl text-4xl font-bold max-w-screen-hd mx-auto my-10">
          {" "}
          Nos services
        </h1>
        <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  mx-auto max-w-5xl text-white md:grid-flow-col-dense">
          <div className=" bg-blue-300 text-7xl md:row-start-1 md:row-end-3 md:h-96 h-64 p-2">
            Studio de music
          </div>
          <div className=" bg-gray-900 relative h-64">
            <p className="absolute text-9xl top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50 font-bold">
              PO
            </p>
          </div>
          <div className=" bg-gray-300 h-64 text-7xl md:row-start-2 md:row-end-4 md:h-96 p-2 ">
            Aide & partage
          </div>

          <div className=" bg-gray-900 relative h-64 font-bold ">
            <p className="absolute text-9xl top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50">
              LE
            </p>
          </div>
          <div className=" bg-red-400 h-64 text-7xl md:row-start-1 md:row-end-3 md:h-96 p-2 ">
            Figuration
          </div>
          <div className=" bg-gray-900 relative h-64 font-bold ">
            <p className="absolute text-9xl top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50">
              ED
            </p>
          </div>
        </section>
      </section>

      <section className="my-10 px-10 relative max-w-screen-2xl mx-auto">
        <h1 className="sm:text-6xl text-4xl font-bold max-w-screen-hd mx-auto my-10">
          {" "}
          Notre Equipe
        </h1>
        <BsChevronCompactRight
          className="md:hidden text-gray-300 absolute top-1/2  right-6 transform translate-x-1/2 translate-y-1/2 cursor-pointer z-10"
          size={50}
          onClick={() => {
            const sec = document.getElementById("section_team");
            sec.scrollBy({ left: 150, behavior: "smooth" });
          }}
        />
        <BsChevronCompactLeft
          className="md:hidden text-gray-300 absolute top-1/2  -left-6 transform translate-x-1/2 translate-y-1/2 cursor-pointer z-10"
          size={50}
          onClick={() => {
            const sec = document.getElementById("section_team");
            sec.scrollBy({ left: -150, behavior: "smooth" });
          }}
        />
        <section
          id="section_team"
          className="flex w-full gap-5 overflow-x-scroll lg:justify-center"
        >
          <TeamCard name={"Ilyes Bensalem"} job={"Président"} img={team3} />
          <TeamCard name={"Denis Moore"} job={"Tresorier"} img={team2} />
          <TeamCard name={"Un mec super"} job={"job"} img={team1} />
        </section>
      </section>

      <section className="my-10 px-10 flex flex-col max-w-screen-2xl mx-auto md:flex-row md:items-center">
        <div className="my-10 md:w-1/2 lg:w-1/3">
          <h1 className="sm:text-6xl text-4xl mb-5">
            Prêt à devenir <br /> Poleed?
          </h1>
          <Link
            to={"contact"}
            className="bg-gray-900 text-xl px-5 py-2 cursor-pointer text-white"
          >
            {" "}
            Contactes nous !{" "}
          </Link>
        </div>
        <div className="space-y-5 text-2xl md:max-w-3xl">
          <p>
            Notre but principale est la promotion artistique. Pour cela nous
            suivons des artistes dans le développement de leurs projets en
            offrant un accès à la production.{" "}
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
