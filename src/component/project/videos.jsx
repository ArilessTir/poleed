import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import ProjectCard from "../projectCard/projectCard";
import EventCardSkeleton from "../eventCardSkeleton/eventCardSkeleton";
import { get_projects } from "../../services/projectsAPI";

const Videos = () => {
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
              return item.attributes.type === "video";
            })
            ?.map(data => {
              return (
                <ProjectCard>
                  <ReactPlayer
                    controls="true"
                    width="100%"
                    height="100%"
                    url={data.attributes.link}
                  />
                </ProjectCard>
              );
            })}
    </>
  );
};

export default Videos;
