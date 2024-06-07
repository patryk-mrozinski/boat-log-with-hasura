import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Card = (boatData) => {
  const boat = boatData.boat;

  return (
    <div>
      <Link
        to={boat.id}
        className="flex flex-col my-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <StaticImage
          className="object-cover w-11/12 rounded-lg h-auto"
          src="../../images/sample-image.JPG"
          alt="Boat"
        />

        <div className="flex flex-col justify-between leading-normal w-full p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {boat.name}
          </h5>
          <ul className="list-none">
            <li>Home port: {boat.home_port}</li>
            <li>Type: {boat.kind}</li>
            <li>Number: {boat.number}</li>
            <li>Length: {boat.length}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Card;
