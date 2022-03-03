/* eslint-disable react/prop-types */
import React from "react";
import { BsFillFilePdfFill } from "react-icons/bs";
import { saveAs } from "file-saver";

const PdfLink = ({ link }) => {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
  return (
    <div className="flex align items-center cursor-pointer">
      <BsFillFilePdfFill size={40} />
      <a onClick={saveFile} className="text-xl mt-auto">
        {link.text}
      </a>
    </div>
  );
};

export default PdfLink;
