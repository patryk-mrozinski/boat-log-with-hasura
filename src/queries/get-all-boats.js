import { gql } from "@apollo/client";

const GET_ALL_BOATS = gql`
  query AllBoats {
    boats {
      id
    }
  }
`;

export default GET_ALL_BOATS;
