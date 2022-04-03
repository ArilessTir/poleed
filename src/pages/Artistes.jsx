import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ArtistCard from "../component/artistCard/artistCard";
import { Link } from "react-router-dom";
import { get_artists } from "../services/artistAPI";
import ArtistCardSkeleton from "../component/artistCardSkeleton/artistCardSkeleton";

const Artistes = () => {
  const [artiste, setArtiste] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tab = [...Array(3).keys()];

  useEffect(async () => {
    fetchAllArtists();

    const tl = gsap.timeline();

    tl.from(".card", {
      y: 10,
      opacity: 0,
      duration: 0.4,
      stagger: {
        amount: 0.5
      }
    });
  }, []);

  const fetchAllArtists = async () => {
    const data = await get_artists(setIsLoading);
    setArtiste(data);
  };

  return (
    <section className="px-5 mt-20">
      <div className="text-center py-10 font-bold text-4xl">Artistes</div>
      <div
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
                <div key={item.id} className="card">
                  <ArtistCardSkeleton key={item} />
                </div>
              );
            })
          : artiste?.map(item => {
              return (
                <div key={item.id} className="card">
                  <ArtistCard data={item} key={item.id} />
                </div>
              );
            })}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="md:w-2/3 text-center mb-5 max-w-5xl text-xl">
          Suis les artistes poleed. Découvre les differents univers
        </p>
        <Link to="/about">
          {" "}
          <button className=" mb-5 py-3 px-6 font-bold text-white bg-red-600 rounded-md">
            {" "}
            Rejoins nous
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Artistes;
