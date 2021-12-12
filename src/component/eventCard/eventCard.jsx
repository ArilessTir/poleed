/* eslint-disable react/prop-types */
import React from "react";
import Concert from "../../assets/images/Concert.jpg";
import { BsArrowRightShort } from "react-icons/bs";
const EventCard = ({ size }) => {
  return (
    <div
      className={`${size}  rounded-xl cursor-pointer
     flex flex-col bg-black text-white p-5 relative`}
    >
      <div className="h-1/2">
        <img
          src={Concert}
          alt="Concert"
          className="rounded-xl max-h-full w-full"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold py-2"> Concert </h1>
        <h1 className="font-bold pb-4"> Samedi 4 décembre 2021 </h1>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu risus
          egestas velit cursus convallis sollicitudin est. Enim vulputate est id
          quis leo pulvinar tincidunt. Cursus ut commodo in neque in tortor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu risus
          egestas velit cursus convallis sollicitudin est. Enim vulputate est id
          quis leo pulvinar tincidunt. Cursus ut commodo in neque in tortor.
          `.substring(0, 100) + ` ...`}
        </p>
      </div>
      <div>
        <BsArrowRightShort className="absolute bottom-2 right-2 " size={38} />
      </div>
    </div>
  );
};

export default EventCard;
