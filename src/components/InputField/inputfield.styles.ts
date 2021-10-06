import styled from "styled-components";
import { Label, primaryFont, Input } from "../../styles/common.styles";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const InputLabel = styled(Label)`
  font-size: 1.5rem;
  font-family: ${primaryFont};
  margin-bottom: 0.1rem;
`;

const ShowPassword = styled.button`
  border: 0;
  background: transparent;
  padding: 0 1rem;
  outline-color: ${({ theme }) => theme.tertiary};
`;

const PasswordInput = styled(Input)`
  flex: 1;
`;

const Show = styled(BsFillEyeFill)`
  color: ${({ theme }) => theme.tertiary};
`;

const Hide = styled(BsFillEyeSlashFill)`
  color: ${({ theme }) => theme.tertiary};
`;

const Error = styled.span`
  color: ${({ theme }) => theme.invalid};
  font-family: ${primaryFont};
  padding: 0.2rem;
`;

export { InputLabel, ShowPassword, Show, Hide, PasswordInput, Error };
