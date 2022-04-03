import React from "react";
import { Outlet } from "react-router-dom";
import NavigationLink from "../component/navigationLink/navigationLink";
const Projects = () => {
  const nav = [
    { id: 1, direction: "", name: "Nos videos" },
    { id: 2, direction: "image", name: "Nos photos" },
    { id: 3, direction: "music", name: "Nos sons" }
  ];

  return (
    <section className="px-5 mt-20 min-h-screen">
      <div className="text-center py-10 font-bold text-4xl">Nos Projets</div>
      <ul className="flex justify-center space-x-8 text-lg">
        {nav.map(item => {
          return <NavigationLink data={item} key={item.id} />;
        })}
      </ul>
      <section className="flex flex-wrap gap-5 mx-auto max-w-7xl justify-center py-5">
        <Outlet />
      </section>
    </section>
  );
};

export default Projects;
