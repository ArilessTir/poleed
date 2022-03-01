/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

const Notification = ({ notif }) => {
  let test = notif ? "right-5" : "-right-full";

  return (
    <section className={`notif fixed ${test} transition-all`}>
      <div className=" h-20 w-44 bg-gray-100 relative pl-2 ">
        <h1>Notification</h1>
        <p className=" text-xs">Copié !</p>
        <div className="bg-green-500 h-full w-1 top-0 absolute left-0"></div>
      </div>
    </section>
  );
};

export default Notification;
