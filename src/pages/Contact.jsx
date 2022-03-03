import React, { useState } from "react";

import Loca from "../assets/images/Localisation.png";
import { BsTelephoneFill } from "react-icons/bs";
import { FiMail, FiCopy, FiPhone, FiHome, FiInstagram } from "react-icons/fi";
import ContactModal from "../component/contactModal/contactModal";
import Notification from "../component/notification/notification";

const Contact = () => {
  const [notif, setNotif] = useState(false);

  const handleCopy = text => {
    // navigator.clipboard.writeText(e.target.innerHTML);
    navigator.clipboard.writeText(text);
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 2000);
  };

  return (
    <body className="max-w-screen-hd mx-auto mt-20">
      <Notification notif={notif} />
      <h1 className="text-center py-10 font-bold text-4xl">Contact</h1>
      <p className=" max-w-screen-2xl mx-auto text-center px-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
        nostrum dignissimos! Ipsam, omnis sed nisi doloribus harum voluptatibus
        autem blanditiis quibusdam amet culpa perspiciatis illo reprehenderit,
        consectetur deleniti cum dignissimos? Suscipit, aut! Ipsa repellendus
        mollitia harum ut amet doloremque dolores asperiores, porro nam nesciunt
        nobis dolore sed sunt illum dolor perferendis, architecto consequuntur
        molestiae necessitatibus cupiditate perspiciatis id itaque voluptatum.
      </p>

      <section className="py-4 md:flex items-center justify-center md:space-x-10 max-w-screen-2xl mx-auto">
        <div className=" md:pl-5 md:w-1/2">
          <iframe
            className="w-full h-80 mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10109.936138539986!2d3.1638959697753903!3d50.69240169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c328ec1eaf6001%3A0xa4bdf7137b03355c!2s3%20Rue%20Nain%2C%2059100%20Roubaix!5e0!3m2!1sfr!2sfr!4v1646296152194!5m2!1sfr!2sfr"
          ></iframe>
        </div>

        <div className="flex flex-col space-y-4 md:space-y-10 pt-4 px-5 justify-around md:w-auto">
          <h1 className="text-3xl"> Ou peux tu nous contacter? </h1>
          <div className="flex cursor-pointer items-center space-x-2 max-w-xs">
            <FiMail size={23} />
            <a className="text-xl" href="mailto: poleed@gmail.com">
              poleed@gmail.com
            </a>
            <FiCopy
              size={23}
              style={{
                marginLeft: "auto"
              }}
              onClick={() => {
                handleCopy("poleed@gmail.com");
              }}
            />
          </div>

          <div className="flex cursor-pointer items-center space-x-2 max-w-xs">
            <FiPhone size={23} />
            <a className="text-xl" href="tel:0767722371">
              0767722371
            </a>
            <FiCopy
              size={23}
              style={{
                marginLeft: "auto"
              }}
              onClick={() => {
                handleCopy("0767722371");
              }}
            />
          </div>

          <div className="flex cursor-pointer items-center space-x-2 max-w-xs">
            <FiHome size={23} />
            <a className="text-xl">3 Rue Nain, 59100 Roubaix</a>
            <FiCopy
              size={23}
              style={{
                marginLeft: "auto"
              }}
              onClick={() => {
                handleCopy("3 Rue Nain, 59100 Roubaix");
              }}
            />
          </div>

          <div className="flex cursor-pointer items-center space-x-2 max-w-xs">
            <FiInstagram size={23} />

            <a
              className="text-xl"
              href="https://www.instagram.com/_poleed/?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              @Poleed
            </a>
            <FiCopy
              size={23}
              style={{
                marginLeft: "auto"
              }}
              onClick={() => {
                handleCopy("@Poleed");
              }}
            />
          </div>
        </div>
      </section>
    </body>
  );
};

export default Contact;
