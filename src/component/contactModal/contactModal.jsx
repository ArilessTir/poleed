import React, { useEffect } from "react";
import gsap from "gsap";

const ContactModal = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#modal", {
      height: 0,
      delay: 0.5
    }).from(".content", {
      opacity: 0,

      stagger: {
        amount: 0.2
      }
    });
  }, []);

  return (
    <>
      <div
        id="modal"
        className="flex flex-col justify-center text-center text-white items-center fixed bottom-0 w-full bg-gray-800 z-40"
      >
        <h1 className="content font-bold text-2xl py-4">Info Contact</h1>
        <p className="content">
          Pour nous contacter merci de privilegier notre compte instagram
        </p>
        <a
          className="content my-2 py-2 px-4 font-bold text-white bg-red-600 rounded-md cursor-pointer"
          href="https://www.instagram.com/_poleed/?hl=fr"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Contacte nous
        </a>
      </div>
    </>
  );
};

export default ContactModal;
