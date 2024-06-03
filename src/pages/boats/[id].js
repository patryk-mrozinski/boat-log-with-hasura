import React from "react";

import useGetBoat from "../../hooks/useGetBoat";

const BoatPage = (props) => {
  const id = props.id;
  const {
    data: boatData,
    loading,
    error,
  } = useGetBoat({ variables: { id: id } });
  const boat = boatData?.boat;

  console.log(boat);
  return id;
};

export default BoatPage;
