import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);

  return (
    <>
      <UserForm onSubmit={activateAuth} title="Registrarse" />
      <UserForm onSubmit={activateAuth} title="Iniciar sesión" />
    </>
  );
};
