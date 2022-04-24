import React from "react";
import { gql } from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";
import PropTypes from "prop-types";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const LoginMutation = ({ children }) => {
  return <Mutation mutation={LOGIN}>{children}</Mutation>;
};

LoginMutation.propTypes = {
  children: PropTypes.any,
};
