import React from "react";
import PropTypes from "prop-types";
import { useInputValue } from "../../hooks/unseInputValue";

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        {...email}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...password}
      />
      <button>Iniciar Sesión</button>
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.any,
};
