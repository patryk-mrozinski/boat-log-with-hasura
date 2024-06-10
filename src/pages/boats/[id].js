import React from "react";

import useGetBoat from "../../hooks/useGetBoat";
import GenericDetails from "../../components/boats/generic-details";
import OwnerPanel from "../../components/boats/owner-panel";

const BoatPage = (props) => {
  const id = props.id;
  const {
    data: boatData,
    loading,
    error,
  } = useGetBoat({ variables: { id: id } });
  const boat = boatData?.boat;

  if (loading) {
    return <div>loading...</div>;
  }

  console.log({ error });
  if (error) {
    return <div>Error, please try again later</div>;
  }

  return (
    <div>
      <div className="font-bold underline">{boat?.name}</div>
      <GenericDetails boat={boat} />
      <OwnerPanel boat={boat} />
    </div>
  );
};

export default BoatPage;
