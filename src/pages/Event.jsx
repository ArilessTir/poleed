import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Concert from "../assets/images/Concert.jpg";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Event = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:1337/api/events/${id}?populate=images`
    );
    const data = await response.data;
    setData(data.data);
  }, []);

  return (
    <body
      className="border-white max-w-10xl max-w-screen-hd  mx-auto
                  md:flex md:min-h-screen md:px-0 "
    >
      <section className="md:w-1/2 border-8 md:rounded-tr-lg md:rounded-bl-none  rounded-br-lg rounded-bl-lg border-black max-h-full">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          src={`http://localhost:1337${data?.attributes.images.data[0].attributes.formats.large.url}`}
          alt=""
          className=" object-cover min-h-full mx-auto "
        />{" "}
      </section>

      <section className="md:w-1/2 md:px-8 md:py-16 max-w-5xl ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="md:py-12  py-6"
        >
          <h1 className="font-bold text-4xl uppercase">
            {data?.attributes.name}
          </h1>
          <span className="h-1 bg-black w-20 block rounded-md "></span>

          <h2 className="uppercase">{data?.attributes.date}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-black leading-7 lg:w-2/3"
        >
          {data?.attributes.description}
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
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={30} className="" />
          </a>
          <a
            className="cursor-pointer"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube size={30} className="hover:text-red-600" />
          </a>{" "}
          <a
            className="cursor-pointer"
            href="#"
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

export default Event;
