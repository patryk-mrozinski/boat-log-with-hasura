import { useQuery } from "@apollo/client";

import GET_BOAT from "../queries/get-boat";

const useGetBoat = (options = {}) => {
  return useQuery(GET_BOAT, {
    context: {
      // TODO: setup auth
      headers: {
        "x-hasura-admin-secret": process.env.GATSBY_HASURA_ADMIN_SECRET,
      },
    },
    ...options,
  });
};

export default useGetBoat;
