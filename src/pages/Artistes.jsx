import React, { useEffect, useState } from "react";
import ArtistCard from "../component/artistCard/artistCard";
import axios from "axios";

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
    <body className="overflow-hidden">
      <h1 className="text-center py-10 font-bold text-4xl">Artistes</h1>
      <div className="flex flex-wrap gap-x-5 gap-3 mx-auto max-w-7xl justify-center">
        {artiste.map(item => {
          /* <ArtistCard data={item} />;*/
          // eslint-disable-next-line react/jsx-key
          return <ArtistCard data={item} />;
        })}
      </div>
    </body>
  );
};

export default Artistes;
