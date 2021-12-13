import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import EventCard from "../component/eventCard/eventCard";

const Events = () => {
  const tab = [...Array(19).keys()];

  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:1337/api/events?populate=images"
    );
    const data = await response.data;
    setData(data.data);
  }, []);

  console.log(data);

  return (
    <body>
      <h1 className="text-center py-10 font-bold text-4xl">Au programmes</h1>
      <section className="grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 px-16 max-w-screen-hd mx-auto ">
        <EventCard
          size={"md:col-span-2 md:row-span-2 md:p-10 h-full"}
          data={data[0]}
        />
        {data?.slice(1).map(item => {
          // eslint-disable-next-line react/jsx-key
          return <EventCard data={item} />;
        })}
      </section>
    </body>
  );
};

export default Events;
