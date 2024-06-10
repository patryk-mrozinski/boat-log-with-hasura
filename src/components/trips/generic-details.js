import * as React from "react";

const GenericDetails = ({ trip }) => {
  const isLoading = !trip;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <div className="flex justify-center">
        <ul className="list-none">
          <h3 className="font-bold underline">Information:</h3>
          <li>Start Port: {trip.start_port}</li>
          <li>Planed finish port: {trip.estimated_finish_port}</li>
          <li>Finished in port: {trip.finish_port}</li>
          <li>Started at: {trip.start_time}</li>
          <li>Finished at: {trip.end_time}</li>
        </ul>
      </div>
    </div>
  );
};

export default GenericDetails;
