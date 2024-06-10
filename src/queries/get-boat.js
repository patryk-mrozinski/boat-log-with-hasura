import { gql } from "@apollo/client";

const GET_BOAT = gql`
  query GetBoatById($id: uuid!) {
    boat: boats_by_pk(id: $id) {
      id
      certificate_number
      home_port
      kind
      length
      mast_height
      maximum_draft
      name
      number
      number_of_record_card
      sails_area
      width
      engines {
        power
        kind
        brand
      }
      engines_aggregate {
        aggregate {
          count
        }
      }
      sails {
        mark
        kind
        area
      }
      sails_aggregate {
        aggregate {
          count
        }
      }
      trips(limit: 1, where: { current_status: { _eq: in_progress } }) {
        current_status
        end_time
        estimated_finish_port
        id
        start_port
        start_time
        updated_at
      }
      trips_aggregate(where: { current_status: { _eq: finished } }) {
        aggregate {
          count
        }
      }
    }
  }
`;

export default GET_BOAT;
