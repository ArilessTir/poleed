import React, { useState } from "react";
import Loca from "../assets/images/Localisation.png";
import { BsTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });

  const handleChange = e => {
    e.preventDefault();
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({ ...data, [key]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <body className="max-w-screen-hd mx-auto mt-20">
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

      <form className=" space-y-4 py-10 px-5">
        <div className="flex flex-col ">
          <label className="text-md font-bold">Prenom</label>
          <input
            name="name"
            className="border-2 rounded-md pl-2 md:w-96"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-md font-bold">Email</label>
          <input
            name="email"
            className="border-2 rounded-md pl-2 md:w-96"
            type="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-md font-bold ">Sujet</label>
          <input
            name="topic"
            className="border-2 rounded-md pl-2 md:w-96"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-md font-bold">Message</label>
          <textarea
            className="border-2 rounded-md pl-2"
            name="message"
            id=""
            cols="30"
            rows="5"
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          className=" mb-5 py-3 px-6 font-bold text-white bg-red-600 rounded-md"
          onClick={handleSubmit}
        >
          {" "}
          Envoyer{" "}
        </button>
      </form>

      <section className="py-4 md:flex items-center justify-start md:space-x-10">
        <div className=" md:pl-5">
          <img src={Loca} alt="" />
        </div>

        <div className=" h-72 w-0.5 transform  bg-gray-200 md:block hidden"></div>

        <div className="flex flex-col space-y-4 md:space-y-10 pt-4 px-5 justify-around ">
          <div className="flex items-center space-x-4">
            <FiMail size={23} />
            <p>10 Grand Place, 59100, ROUBAIX</p>
          </div>
          <div className="flex items-center  space-x-4">
            <BsTelephoneFill size={23} />
            <p>0712345678</p>
          </div>
          <div className="flex items-center  space-x-4">
            <FiMail size={23} />
            <p>poleed@gmail.com</p>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Contact;
