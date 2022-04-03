import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useParams } from "react-router-dom";
import { get_one_event } from "../services/eventAPI";

const Event = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(async () => {
    const data = await get_one_event(id);
    setData(data);

    gsap.from(".evt", {
      y: 50,
      delay: 0.3,
      opacity: 0,
      stagger: {
        amount: 0.5
      }
    });

    gsap.from(".img", {
      x: -50,
      y: -50,
      delay: 0.4,
      scale: 1.1,
      opacity: 0
    });
  }, []);
  return (
    <section
      className="border-white max-w-10xl max-w-screen-hd  mx-auto
                  md:flex md:min-h-screen md:px-0 mt-20"
    >
      <div
        className="img md:w-1/2 md:h-auto h-96"
        style={{
          backgroundImage: `url(${data?.attributes.images.data[0].attributes.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <section className="md:w-1/2 md:px-8 md:py-16 max-w-5xl px-4">
        <div className="evt md:py-12  py-6">
          <h1 className="font-bold text-4xl uppercase">
            {data?.attributes.name}
          </h1>
          <span className="h-1 bg-black w-20 block rounded-md "></span>

          <h2 className="uppercase">
            {new Date(data?.attributes.date).toLocaleDateString("fr")}
          </h2>
        </div>

        <div className="evt text-black leading-7 lg:w-2/3 mb-4 text-xl">
          {data?.attributes.description}
        </div>
        <div className="evt py-6">
          <a
            className="py-2 px-4 font-bold text-white bg-red-600 rounded-md cursor-pointer"
            href="https://www.instagram.com/_poleed/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Contacte nous
          </a>
        </div>
      </section>
    </section>
  );
};

export default Event;
