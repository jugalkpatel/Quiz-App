import { PulseLoader } from "react-spinners";

export type SpinnerProps = {
  isLoading: boolean;
  size: string;
  color: string;
};

function Spinner({ isLoading, size, color }: SpinnerProps) {
  return <PulseLoader loading={isLoading} size={size} color={color} />;
}

export { Spinner };
