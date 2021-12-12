import React from "react";
import EventCard from "../component/eventCard/eventCard";

const Events = () => {
  const tab = [...Array(19).keys()];

  return (
    <body className=" ">
      <h1 className="text-center py-10 font-bold text-4xl">Au programmes</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 px-16 max-w-screen-hd mx-auto ">
        <EventCard size={"md:col-span-2 md:row-span-2 md:p-10"} />
        {tab.map(() => {
          // eslint-disable-next-line react/jsx-key
          return <EventCard />;
        })}
      </section>
    </body>
  );
};

export default Events;
