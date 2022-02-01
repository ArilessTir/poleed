import React, { useState } from "react";

const ContactModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid justify-center items-center h-screen w-screen bg-gray-800 bg-opacity-90 absolute z-40">
        <div className="min-h-52 w-192 bg-gray-100 text-center ">
          <h1 className="font-bold text-2xl pt-2">Info Contact</h1>
          <p>Pour nous contacter merci de privilegié notre compte instagram</p>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
