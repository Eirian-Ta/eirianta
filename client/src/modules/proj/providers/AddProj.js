import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_PROJS } from './ProjList';

const ADD_PROJ = gql`
  mutation(
    $title: String!, 
    $type: String!, 
    $desc: String!, 
    $tech: String!, 
    $monPic: String!, 
    $mobPic: String!, 
    $liveURL: String!, 
    $codeURL: String!, 
    $viewURL: String!
    ) { addProj(
      title: $title, 
      type: $type,
      desc: $desc,
      tech: $tech,
      monPic: $monPic,
      mobPic: $mobPic,
      liveURL: $liveURL,
      codeURL: $codeURL,
      viewURL: $viewURL
      ) {
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

const withAddProj = Component => props => {
  return (
    <Mutation mutation={ADD_PROJ}>
      {addProj => {
        return (
          <Component addProj={({ 
            title, 
            type,
            desc,
            tech,
            monPic,
            mobPic,
            liveURL,
            codeURL,
            viewURL
          }) => addProj({
            variables: { 
              title, 
              type,
              desc,
              tech,
              monPic,
              mobPic,
              liveURL,
              codeURL,
              viewURL
            }, refetchQueries: [
              { query: GET_PROJS }
            ] })}
          />
        )
      }}
    </Mutation>
  );
};

export default withAddProj;
