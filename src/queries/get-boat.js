import { gql } from "@apollo/client";

const GET_BOAT = gql`
  query GetBoatById($id: uuid!) {
    boat: boats_by_pk(id: $id) {
      id
      kind
      length
      home_port
      name
      number
    }
  }
`;

export default GET_BOAT;
