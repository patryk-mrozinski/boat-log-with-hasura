import { useQuery } from "@apollo/client";

import GET_ALL_BOATS from "../queries/get-all-boats";

const useAllBoats = (options = {}) => {
  return useQuery(GET_ALL_BOATS, {
    context: {
      // TODO: setup auth
      headers: {
        "x-hasura-admin-secret": process.env.GATSBY_HASURA_ADMIN_SECRET,
      },
    },
  });
};

export default useAllBoats;
