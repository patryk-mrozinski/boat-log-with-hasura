import { gql } from "@apollo/client";

const GET_FINISHED_TRIPS_BY_BOAT = gql`
  query getFinishedTripsByBoat($boatId: uuid!, $status: trip_status_enum) {
    trips(
      where: {
        boat_id: { _eq: $boatId }
        _and: { current_status: { _eq: $status } }
      }
    ) {
      id
      created_at
      end_time
      estimated_end_time
      estimated_finish_port
      start_port
      start_time
      finish_port
    }
  }
`;

export default GET_FINISHED_TRIPS_BY_BOAT;
