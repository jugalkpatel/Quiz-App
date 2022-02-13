import { useTheme } from "styled-components";
import { PulseLoader } from "react-spinners";

export type SpinnerProps = {
  isLoading: boolean;
  size: string;
  color?: string;
};

function Spinner({ isLoading, size, color }: SpinnerProps) {
  const theme = useTheme();
  return (
    <PulseLoader
      loading={isLoading}
      size={size}
      color={color || theme.primary}
    />
  );
}

export { Spinner };
