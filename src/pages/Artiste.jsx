import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

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
    <body className="md:flex md:h-screen px-5 max-w-10xl m-auto">
      <section
        style={{
          backgroundImage: `url('http://localhost:1337${artiste?.attributes.images.data[0].attributes.url}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="md:w-1/2 border-8 border-white"
      >
        <img
          className="md:hidden"
          src={`http://localhost:1337${artiste?.attributes.images.data[0].attributes.url}`}
          alt=""
        />
      </section>

      <section className="md:w-1/2 md:px-8 md:py-16">
        <div className="md:py-12  py-6">
          <h1 className="font-bold text-4xl uppercase">
            {artiste?.attributes.name}
          </h1>
          <h2 className="uppercase">{artiste?.attributes.occupation}</h2>
        </div>

        <p className="text-black leading-7">
          {artiste?.attributes.description}
        </p>

        <div className="my-6">
          <h1 className="font-bold text-3xl my-5 ">Ses Projets</h1>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
          <p>https://www.youtube.com/watch?v=hSEZJqacL0c</p>
        </div>

        <div className="space-x-5 flex justify-end p-6 ">
          <div className="bg-black w-6 h-6 rounded-md cursor-pointer"></div>
          <div className="bg-black w-6 h-6 rounded-md cursor-pointer"></div>
          <div className="bg-black w-6 h-6 rounded-md cursor-pointer"></div>
        </div>
      </section>
    </body>
  );
};

export default Artiste;
