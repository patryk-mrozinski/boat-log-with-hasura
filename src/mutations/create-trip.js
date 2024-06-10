import { gql } from "@apollo/client";

const CREATE_TRIP = gql`
  mutation CreateTrip($data: trips_insert_input!) {
    createdTrip: insert_trips_one(object: $data) {
      id
    }
  }
`;

export default CREATE_TRIP;
