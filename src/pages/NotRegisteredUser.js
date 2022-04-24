import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  return (
    <>
      <RegisterMutation>
        {(register, { data, error, loading }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };

            register({ variables }).then(activateAuth);
          };

          const errorMsg = error && "El usuario ya existe o hay algún problema";

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Registrarse"
            />
          );
        }}
      </RegisterMutation>
      <UserForm onSubmit={activateAuth} title="Iniciar sesión" />
    </>
  );
};
