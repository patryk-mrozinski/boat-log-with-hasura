import * as React from "react";
import useBoatTrips from "../../hooks/useGetFinishedTripsByBoat";
import GenericDetails from "../../components/trips/generic-details";

const TripsPage = (props) => {
  const boatId = props.location.state?.boatId;

  const {
    data: tripsData,
    loading,
    error,
  } = useBoatTrips({ variables: { boatId: boatId, status: "finished" } });
  const trips = tripsData?.trips;

  console.log({ trips });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold underline">Finished trips</h1>

      <div className="grid md:grid-cols-2">
        {trips.map((trip) => (
          <GenericDetails key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default TripsPage;
