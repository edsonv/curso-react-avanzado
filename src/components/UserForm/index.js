import React from "react";
import PropTypes from "prop-types";
import { useInputValue } from "../../hooks/unseInputValue";
import { Form, Input, Button, Title, Error } from "./styles";

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          disabled={disabled}
          {...email}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          disabled={disabled}
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.any,
  disabled: PropTypes.bool,
};
