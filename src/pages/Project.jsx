import React from "react";
import ReactPlayer from "react-player";
const Projects = () => {
  return (
    <div className="mx-5 mt-20">
      <div className="text-center py-10 font-bold text-4xl">Nos Projets</div>

      <section className="flex flex-wrap gap-5 mx-auto max-w-7xl justify-center py-5">
        <div className="w-96 h-80 rounded-md overflow-hidden ">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=kqQlDZmopaU"
          />
        </div>

        <div className="w-96 h-80 rounded-md overflow-hidden ">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=QFSS0icHEp0"
          />
        </div>

        <div className="w-96 h-80 rounded-md overflow-hidden ">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=h-2QEiN5Z7s"
          />
        </div>
        <div className="w-96 h-80 rounded-md overflow-hidden ">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=h-2QEiN5Z7s"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
