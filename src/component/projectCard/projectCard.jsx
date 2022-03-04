/* eslint-disable react/prop-types */
import React from "react";

const ProjectCard = ({ children }) => {
  return (
    <div className="w-96 h-80 rounded-md overflow-hidden ">{children}</div>
  );
};

export default ProjectCard;
