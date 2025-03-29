import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      name
      email
      profileImageUrl
    }
  }
`;

export const GET_SENT_BOMBS = gql`
  query GetSentBombs {
    mySentBombs {
      id
      title
      description
      status
      createdAt
      sentAt
      recipient {
        id
        name
        email
      }
    }
  }
`;

export const GET_RECEIVED_BOMBS = gql`
  query GetReceivedBombs {
    myReceivedBombs {
      id
      title
      description
      status
      createdAt
      sentAt
      creator {
        id
        name
        email
      }
    }
  }
`;

export const GET_HAPPINESS_BOMB = gql`
  query GetHappinessBomb($id: String!) {
    happinessBomb(id: $id) {
      id
      title
      description
      status
      createdAt
      sentAt
      creator {
        id
        name
        email
      }
      recipient {
        id
        name
        email
      }
    }
  }
`; 