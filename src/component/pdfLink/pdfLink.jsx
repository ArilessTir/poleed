/* eslint-disable react/prop-types */
import React from "react";
import { BsFillFilePdfFill } from "react-icons/bs";

const PdfLink = ({ link }) => {
  return (
    <div className="flex align items-center cursor-pointer">
      <BsFillFilePdfFill size={40} />
      <a
        className="text-xl mt-auto hover:text-red-600 transition"
        href={link.link}
        download={link.text}
        target="_blank"
        rel="noreferrer"
      >
        {link.text}
      </a>
    </div>
  );
};

export default PdfLink;
