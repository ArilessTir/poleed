import React from "react";
import ReactPlayer from "react-player";
import ProjectCard from "../component/projectCard/projectCard";

const Projects = () => {
  const links = [
    "https://www.youtube.com/watch?v=kqQlDZmopaU",
    "https://www.youtube.com/watch?v=QFSS0icHEp0",
    "https://www.youtube.com/watch?v=h-2QEiN5Z7s",
    "https://www.youtube.com/watch?v=h-2QEiN5Z7s",
    "https://www.youtube.com/watch?v=h-2QEiN5Z7s"
  ];
  return (
    <div className="mx-5 mt-20">
      <div className="text-center py-10 font-bold text-4xl">Nos Projets</div>

      <section className="flex flex-wrap gap-5 mx-auto max-w-7xl justify-center py-5">
        {links.map(link => {
          return (
            <ProjectCard>
              <ReactPlayer
                controls="true"
                width="100%"
                height="100%"
                url={link}
              />
            </ProjectCard>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
