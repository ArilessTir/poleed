import React, { useState, useEffect } from "react";
import ImageCard from "../imagesCard/imagesCard";
import { get_projects } from "../../services/projectsAPI";

const Images = () => {
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
            return item.attributes.type === "image";
          })
          ?.map(item => {
            return <ImageCard data={item} />;
          })
      )}
    </>
  );
};

export default Images;
