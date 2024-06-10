import { useQuery } from "@apollo/client";

import GET_FINISHED_TRIPS_BY_BOAT from "../queries/get-finished-trips-by-boat";

const useGetFinishedTripsByBoat = (options = {}) => {
  return useQuery(GET_FINISHED_TRIPS_BY_BOAT, {
    context: {
      // TODO: setup auth
      headers: {
        "x-hasura-admin-secret": process.env.GATSBY_HASURA_ADMIN_SECRET,
      },
    },
    ...options,
  });
};

export default useGetFinishedTripsByBoat;
