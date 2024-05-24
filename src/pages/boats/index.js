import * as React from "react";
import useAllBoats from "../../hooks/useAllBoats";
import BoatCard from "../../components/boat-card";

const BoatsPage = () => {
  const { data: boatsData, loading, error } = useAllBoats();
  const boats = boatsData?.boats;

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold underline">Hello</h1>

      <div>
        {boats.map((boat) => (
        ))}
      </div>
    </div>
  );
};

export default BoatsPage;