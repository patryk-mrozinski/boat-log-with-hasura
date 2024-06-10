import * as React from "react";
import useAllBoats from "../../hooks/useAllBoats";
import Card from "../../components/boats/card";

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
      <h1 className="text-3xl font-bold underline">Your boats</h1>

      <div className="grid md:grid-cols-2">
        {boats.map((boat) => (
          <Card key={boat.id} boat={boat} />
        ))}
      </div>
    </div>
  );
};

export default BoatsPage;
