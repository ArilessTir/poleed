import React, { useEffect, useState } from "react";
import EventCard from "../component/eventCard/eventCard";
import EventCardSkeleton from "../component/eventCardSkeleton/eventCardSkeleton";
import { get_events } from "../services/eventAPI";
const Events = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tab = [...Array(10).keys()];

  useEffect(async () => {
    fetchAllEvent();
  }, []);

  const fetchAllEvent = async () => {
    const data = await get_events(setIsLoading);
    setData(data);
  };

  return (
    <section>
      <h1 className="text-center py-10 font-bold text-4xl mt-20">
        Au programmes
      </h1>
      {isLoading ? (
        <section className="grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 px-16 max-w-screen-hd mx-auto ">
          {tab.map(item => {
            return <EventCardSkeleton key={item} />;
          })}
        </section>
      ) : (
        <section className="grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 px-16 max-w-screen-hd mx-auto ">
          <EventCard
            size={"md:col-span-2 md:row-span-2 md:p-10 md:h-192 h-96"}
            data={data[0]}
          />
          {data.slice(1).map(item => {
            // eslint-disable-next-line react/jsx-key
            return <EventCard data={item} size={"h-96"} key={item.id} />;
          })}
        </section>
      )}
    </section>
  );
};

export default Events;
