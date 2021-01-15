import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_PROJS = gql`
  {
    projs {
      _id
      title
      type
      desc
      tech
      monPic
      mobPic
      liveURL
      codeURL
      viewURL
    }
  }
`;

const withProjs = Component => props => {
  return (
    <Query query={GET_PROJS}>
      {({ loading, data }) => {
        return (
          <Component projsLoading={loading} projs={data && data.projs} {...props} />
        );
      }}
    </Query>
  );
};

export default withProjs;
