import React, { useState } from "react";
import { ErrorMessage } from "formik";

import { Input, InputWrapper, RowContainer } from "../../styles/common.styles";
import {
  PasswordInput,
  InputLabel,
  ShowPassword,
  Show,
  Hide,
  Error,
} from "./InputField.styles";

type InputFieldProps = {
  label?: string;
  id: string;
  type: "text" | "email" | "password";
  value: string;
  placeholder: string;
};

function Password({ id, type, value, placeholder }: InputFieldProps) {
  const [passwordType, setPasswordType] = useState(type);
  const icon = passwordType === "password" ? <Show /> : <Hide />;

  const showPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPasswordType((prevState: typeof passwordType) =>
      prevState === "password" ? "text" : "password"
    );
  };

  return (
    <RowContainer>
      <PasswordInput
        id={id}
        type={passwordType}
        name={value}
        placeholder={placeholder}
      />
      <ShowPassword onClick={showPassword}>{icon}</ShowPassword>
    </RowContainer>
  );
}

function InputField({ label, id, type, value, placeholder }: InputFieldProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {type === "password" ? (
        <Password id={id} type={type} value={value} placeholder={placeholder} />
      ) : (
        <Input
          id={id}
          type={type}
          name={value}
          placeholder={placeholder}
          required
        />
      )}
      <ErrorMessage component={Error} name={value} />
    </InputWrapper>
  );
}

export { InputField };
