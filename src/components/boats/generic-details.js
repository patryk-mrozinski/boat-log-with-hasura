import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const GenericDetails = ({ boat }) => {
  const isLoading = !boat?.id;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const firstTwoEngnes = boat.engines.slice(0, 2);
  const firstTwoSails = boat.sails.slice(0, 2);
  const numberOfEngines = boat.engines_aggregate.aggregate.count;
  const numberOfSails = boat.sails_aggregate.aggregate.count;

  return (
    <div className="p-10">
      <div className="w-10/12 grid md:grid-cols-4">
        <div>
          <StaticImage
            className="object-cover w-11/12"
            src="../../images/sample-image.JPG"
            alt="Boat"
          />
        </div>
        <div className="flex justify-center">
          <ul className="list-none">
            <h3 className="font-bold underline">Information:</h3>
            <li>Home port: {boat.home_port}</li>
            <li>Type: {boat.kind}</li>
            <li>Number: {boat.number}</li>
            <li>Length: {boat.length}</li>
            <li>Width: {boat.width}</li>
            <li>Certificate Number: {boat.certificate_number}</li>
            <li>Mast Height: {boat.mast_height}</li>
            <li>Maximum Draft: {boat.maximum_draft}</li>
            <li>Number Of Record Card: {boat.number_of_record_card}</li>
            <li>Sails Area: {boat.sails_area}</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="list-none">
            <li>Number of the engines: {numberOfEngines}</li>
            {firstTwoEngnes.map((engine, index) => (
              <div className="my-1" key={index}>
                <h3 className="font-bold underline">Engine {index + 1}</h3>
                <ul>
                  <li>brand: {engine.brand}</li>
                  <li>type: {engine.kind}</li>
                  <li>power: {engine.power} hp</li>
                </ul>
              </div>
            ))}
            {/* TODO: add engine page */}
            {numberOfEngines > 2 && (
              <Link
                to="#"
                className="flex flex-col items-center border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                More engine details
              </Link>
            )}
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="list-none">
            <li>Number of the sails: {numberOfSails}</li>
            {firstTwoSails.map((sail, index) => (
              <div className="my-1" key={index}>
                <h3 className="font-bold underline">Sail {index + 1}</h3>
                <ul key={index}>
                  <li>Type: {sail.kind}</li>
                  <li>Area: {sail.area}</li>
                  <li>Any marks?: {sail.mark ? sail.mark : "NO"}</li>
                </ul>
              </div>
            ))}
            {/* TODO: add sails page */}
            {numberOfSails > 2 && (
              <Link
                to="#"
                className="flex flex-col items-center border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                More sails details
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenericDetails;
