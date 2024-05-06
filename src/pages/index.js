import * as React from "react";

import useAllBoats from "../hooks/useAllBoats";

const IndexPage = () => {
  const { data, loading, error } = useAllBoats();

  console.log({ data, loading, error });

  return <div>Hello</div>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
