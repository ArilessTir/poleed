import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { get_one_event } from "../services/eventAPI";
const Event = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(async () => {
    const data = await get_one_event(id);
    setData(data);
  }, []);

  return (
    <section
      className="border-white max-w-10xl max-w-screen-hd  mx-auto
                  md:flex md:min-h-screen md:px-0 mt-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 md:h-auto h-96"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}${data?.attributes.images.data[0].attributes.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></motion.div>

      <section className="md:w-1/2 md:px-8 md:py-16 max-w-5xl px-4">
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
    </section>
  );
};

export default Event;
