import React, { useEffect, useState } from "react";
import ArtistCard from "../component/artistCard/artistCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Artistes = () => {
  const [artiste, setArtiste] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/artistes?populate=images")
      .then(res => {
        return res.data;
      })
      .then(data => setArtiste(data.data));
  }, []);
  return (
    <body className="overflow-hidden mx-5">
      <h1 className="text-center py-10 font-bold text-4xl">Artistes</h1>
      <div className="flex flex-wrap gap-x-5 gap-3 mx-auto max-w-7xl justify-center">
        {artiste.map(item => {
          /* <ArtistCard data={item} />;*/
          // eslint-disable-next-line react/jsx-key
          return <ArtistCard data={item} />;
        })}
      </div>
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
            Rejoins nous !{" "}
          </button>
        </Link>
      </div>
    </body>
  );
};

export default Artistes;
