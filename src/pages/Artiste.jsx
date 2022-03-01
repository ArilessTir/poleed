import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useParams } from "react-router";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { get_one_artist } from "../services/artistAPI";

const Artiste = () => {
  const { id } = useParams();
  const [artiste, setArtiste] = useState();
  useEffect(async () => {
    const data = await get_one_artist(id);
    setArtiste(data);

    gsap.from(".art", {
      y: 50,
      delay: 0.3,
      opacity: 0,
      stagger: {
        amount: 0.5
      }
    });

    gsap.from(".img", {
      x: -50,
      y: -50,
      delay: 0.3,
      scale: 1.1,
      opacity: 0
    });
  }, []);

  return (
    <section
      className="border-white max-w-10xl max-w-screen-hd  mx-auto
      md:flex md:min-h-screen md:px-0 mt-20"
    >
      <div
        className="img md:w-1/2 md:h-auto h-96"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}${artiste?.attributes.images.data[0].attributes.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <section className="md:w-1/2 md:px-8 md:py-16 max-w-5xl px-4">
        <div className="art md:py-12  py-6">
          <h1 className="font-bold text-4xl uppercase">
            {artiste?.attributes.name}
          </h1>
          <span className="h-1 bg-black w-20 block rounded-md "></span>

          <h2 className="uppercase">{artiste?.attributes.occupation}</h2>
        </div>

        <div className="art text-black leading-7 lg:w-2/3 text-lg">
          {artiste?.attributes.description}
        </div>

        <div className="art my-6">
          <h1 className="font-bold text-3xl my-5 ">Ses Projets</h1>
          <p> ... </p>
        </div>

        <div className="art space-x-5 flex justify-start my-6  ">
          <a
            className="cursor-pointer"
            href={artiste?.attributes.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={30} className="" />
          </a>
          <a
            className="cursor-pointer"
            href={artiste?.attributes.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube size={30} className="" />
          </a>{" "}
          <a
            className="cursor-pointer"
            href={artiste?.attributes.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <BsSpotify size={30} className="" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Artiste;
