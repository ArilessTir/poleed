import React, { useEffect, useState } from "react";
import ArtistCard from "../component/artistCard/artistCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { get_artists } from "../services/artistAPI";
import ArtistCardSkeleton from "../component/artistCardSkeleton/artistCardSkeleton";

const Artistes = () => {
  const [artiste, setArtiste] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tab = [...Array(3).keys()];

  useEffect(async () => {
    fetchAllArtists();
  }, []);

  const fetchAllArtists = async () => {
    const data = await get_artists(setIsLoading);
    setArtiste(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, delay: 2 }}
      transition={{ duration: 1 }}
      className="mx-5 mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-10 font-bold text-4xl"
      >
        Artistes
      </motion.div>
      <motion.div
        animate={{
          transition: {
            staggerChildren: 0.1
          }
        }}
        className="flex flex-wrap gap-x-5 gap-3 mx-auto max-w-7xl justify-center"
      >
        {isLoading
          ? tab.map(item => {
              return (
                <motion.div
                  key={item.id}
                  initial={{
                    y: 60,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    delay: 2,
                    opacity: 1,
                    transition: {
                      duration: 0.6
                    }
                  }}
                  exit={{ opacity: 0 }}
                >
                  <ArtistCardSkeleton key={item} />
                </motion.div>
              );
            })
          : artiste?.map(item => {
              return (
                <motion.div
                  key={item.id}
                  initial={{
                    y: 60,
                    opacity: 0
                  }}
                  animate={{
                    y: 0,
                    delay: 2,
                    opacity: 1,
                    transition: {
                      duration: 0.6
                    }
                  }}
                  exit={{ opacity: 0 }}
                >
                  <ArtistCard data={item} key={item.id} />
                </motion.div>
              );
            })}
      </motion.div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="md:w-2/3 text-center mb-5 max-w-5xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <Link to="/contact">
          {" "}
          <button className=" mb-5 py-3 px-6 font-bold text-white bg-red-600 rounded-md">
            {" "}
            Rejoins nous
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Artistes;
