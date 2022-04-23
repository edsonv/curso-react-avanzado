import React from "react";
import PropTypes from "prop-types";
import { useInputValue } from "../../hooks/unseInputValue";
import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          {...email}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          {...password}
        />
        <Button>{title}</Button>
      </Form>
    </>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.any,
  title: PropTypes.string,
};
