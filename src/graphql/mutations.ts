import { gql } from '@apollo/client';

export const CREATE_HAPPINESS_BOMB = gql`
  mutation CreateHappinessBomb($input: CreateHappinessBombInput!) {
    createHappinessBomb(createHappinessBombInput: $input) {
      id
      title
      description
      status
      createdAt
      recipient {
        id
        name
        email
      }
    }
  }
`;

export const SEND_HAPPINESS_BOMB = gql`
  mutation SendHappinessBomb($id: String!) {
    sendHappinessBomb(id: $id) {
      id
      status
      sentAt
    }
  }
`; 