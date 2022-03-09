import React, { useState, useEffect } from "react";
import MusicCard from "../musicCard/musicCard";
import { get_projects } from "../../services/projectsAPI";

const Musics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const resp = await get_projects(setIsLoading);
    setData(resp);
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Chargement</h1>
      ) : (
        data
          ?.filter(item => {
            return item.attributes.type === "music";
          })
          ?.map(data => {
            return <MusicCard data={data} key={data.id} />;
          })
      )}
    </>
  );
};

export default Musics;
