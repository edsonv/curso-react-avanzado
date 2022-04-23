import React from "react";
import { gql } from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";
import PropTypes from "prop-types";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={REGISTER}>{children}</Mutation>;
};

RegisterMutation.propTypes = {
  children: PropTypes.any,
};
