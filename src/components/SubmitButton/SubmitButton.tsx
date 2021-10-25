import { PulseLoader } from "react-spinners";
import { useTheme } from "styled-components";

import { Submit } from "./SubmitButton.styles";

export type SubmitProps = {
  type: "login" | "register";
  isSubmitting: boolean;
};

export type AuthURLTypes = Record<SubmitProps["type"], string>;

function SubmitButton({ type, isSubmitting }: SubmitProps) {
  const theme = useTheme();

  return (
    <Submit>
      {isSubmitting ? (
        <PulseLoader loading={isSubmitting} size="5px" color={theme.primary} />
      ) : (
        type
      )}
    </Submit>
  );
}

export { SubmitButton };
