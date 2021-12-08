import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";

const Artiste = () => {
  const { id } = useParams();
  const [artiste, setArtiste] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/artistes/${id}?populate=images`)
      .then(res => {
        return res.data;
      })
      .then(data => setArtiste(data.data));
  }, []);

  return (
    <body className="md:flex md:min-h-screen md:px-0 p-5  max-w-10xl m-auto">
      <section
        style={{
          backgroundImage: `url('http://localhost:1337${artiste?.attributes.images.data[0].attributes.url}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="md:w-1/2"
      >
        <img
          className="md:hidden"
          src={`http://localhost:1337${artiste?.attributes.images.data[0].attributes.url}`}
          alt=""
        />
      </section>

      <section className="md:w-1/2 md:px-8 md:py-16 max-w-5xl">
        <div className="md:py-12  py-6">
          <h1 className="font-bold text-4xl uppercase">
            {artiste?.attributes.name}
          </h1>
          <span className="h-1 bg-black w-20 block rounded-md "></span>

          <h2 className="uppercase">{artiste?.attributes.occupation}</h2>
        </div>

        <p className="text-black leading-7 lg:w-2/3">
          {artiste?.attributes.description}
        </p>

        <div className="my-6">
          <h1 className="font-bold text-3xl my-5 ">Ses Projets</h1>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
        </div>

        <div className="space-x-5 flex justify-start my-6  ">
          <a
            className="cursor-pointer"
            href={artiste?.attributes.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={30} className="" />
          </a>
          <a
            className="cursor-pointer"
            href={artiste?.attributes.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube size={30} className="hover:text-red-600" />
          </a>{" "}
          <a
            className="cursor-pointer"
            href={artiste?.attributes.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <BsSpotify size={30} className="hover:text-green-600" />
          </a>
        </div>
      </section>
    </body>
  );
};

export default Artiste;
