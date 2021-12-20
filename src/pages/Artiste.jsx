import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
import { get_one_artist } from "../services/artistAPI";

const Artiste = () => {
  const { id } = useParams();
  const [artiste, setArtiste] = useState();
  useEffect(async () => {
    const data = await get_one_artist(id);
    setArtiste(data);
  }, []);

  return (
    <body
      className="border-white max-w-10xl max-w-screen-hd  mx-auto
      md:flex md:min-h-screen md:px-0 "
    >
      <section className="md:w-1/2">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="object-cover min-h-full mx-auto"
          src={`${process.env.REACT_APP_API_URL}${artiste?.attributes.images.data[0].attributes.url}`}
          alt=""
        />
      </section>

      <section className="md:w-1/2 md:px-8 md:py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="md:py-12  py-6"
        >
          <h1 className="font-bold text-4xl uppercase">
            {artiste?.attributes.name}
          </h1>
          <span className="h-1 bg-black w-20 block rounded-md "></span>

          <h2 className="uppercase">{artiste?.attributes.occupation}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-black leading-7 lg:w-2/3"
        >
          {artiste?.attributes.description}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-6"
        >
          <h1 className="font-bold text-3xl my-5 ">Ses Projets</h1>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="space-x-5 flex justify-start my-6  "
        >
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
            <BsYoutube size={30} className="hover:text-red-600" />
          </a>{" "}
          <a
            className="cursor-pointer"
            href={artiste?.attributes.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <BsSpotify size={30} className="hover:text-green-600" />
          </a>
        </motion.div>
      </section>
    </body>
  );
};

export default Artiste;
