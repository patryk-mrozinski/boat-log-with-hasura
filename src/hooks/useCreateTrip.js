import { useMutation } from "@apollo/client";

import CREATE_TRIP from "../mutations/create-trip";

const useCreateTrip = (options = {}) => {
  return useMutation(CREATE_TRIP, {
    context: {
      headers: {
        "x-hasura-admin-secret": process.env.GATSBY_HASURA_ADMIN_SECRET,
      },
    },
  });
};

export default useCreateTrip;
