import React, { useState } from "react";
import { Link } from "gatsby";

import CreateForm from "../trips/create-form";

const OwnerPanel = ({ boat }) => {
  const [showCreateFrom, setCreateFrom] = useState(false);

  const handleFormToggle = () => {
    setCreateFrom(!showCreateFrom);
  };

  const closeFormModal = () => setCreateFrom(false);

  const isLoading = !boat?.id;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const finishedTrips = boat.trips_aggregate.aggregate.count;
  const tripInProgress = boat.trips;

  const tripInProgressMessage =
    tripInProgress.length > 0 ? (
      <Link to="#" className="text-blue-900">
        YES
      </Link>
    ) : (
      "NO"
    );

  console.log(boat);

  return (
    <div>
      <h2>Has trip in progress: {tripInProgressMessage}</h2>
      <Link
        to="#"
        className="flex flex-col my-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        Trip History({finishedTrips})
      </Link>

      <button
        onClick={handleFormToggle}
        className="my-3 p-3 items-center bg-lime-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        Create new draft trip
      </button>

      {showCreateFrom && (
        <CreateForm closeFormModal={closeFormModal} boatId={boat.id} />
      )}
    </div>
  );
};

export default OwnerPanel;
