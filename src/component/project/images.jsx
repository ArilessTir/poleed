import React, { useState, useEffect } from "react";
import ImageCard from "../imagesCard/imagesCard";
import EventCardSkeleton from "../eventCardSkeleton/eventCardSkeleton";
import { get_projects } from "../../services/projectsAPI";

const Images = () => {
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
              return item.attributes.type === "image";
            })
            ?.map(item => {
              return <ImageCard data={item} key={data.id} />;
            })}
    </>
  );
};

export default Images;
