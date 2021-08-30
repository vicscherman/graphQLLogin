import gql from 'graphql-tag';

export default gql`
  {
    currentuser {
      id
      email
    }
  }
`;
