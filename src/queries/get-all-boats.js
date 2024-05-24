import { gql } from "@apollo/client";

const GET_ALL_BOATS = gql`
  query AllBoats {
    boats {
      id
      kind
      length
      home_port
      name
      number
    }
  }
`;

export default GET_ALL_BOATS;
