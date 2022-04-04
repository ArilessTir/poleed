import React, { useState, useEffect } from "react";
import MusicCard from "../musicCard/musicCard";
import EventCardSkeleton from "../eventCardSkeleton/eventCardSkeleton";
import { get_projects } from "../../services/projectsAPI";

const Musics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tab = [...Array(3).keys()];

  useEffect(async () => {
    const resp = await get_projects(setIsLoading);
    setData(resp);
  }, []);

  return (
    <>
      {isLoading
        ? tab.map(item => {
            return <EventCardSkeleton key={item} width={"w-72"} />;
          })
        : data
            ?.filter(item => {
              return item.attributes.type === "music";
            })
            ?.map(data => {
              return <MusicCard data={data} key={data.id} />;
            })}
    </>
  );
};

export default Musics;
