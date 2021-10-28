import { PulseLoader } from "react-spinners";
import { useTheme } from "styled-components";

export type SpinnerProps = {
  isLoading: boolean;
  size: string;
};

function Spinner({ isLoading, size }: SpinnerProps) {
  const theme = useTheme();
  return <PulseLoader loading={isLoading} size={size} color={theme.primary} />;
}

export { Spinner };
