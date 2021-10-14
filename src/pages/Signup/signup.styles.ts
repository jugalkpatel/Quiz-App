import styled from "styled-components";
import { Link } from "react-router-dom";

import { Label, primaryFont } from "../../styles/common.styles";

const SingupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: 568px) {
    width: 410px;
    margin: 0 auto;
  }
`;

const SignUpHeader = styled.h1`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const SignUpTitle = styled(Label)`
  font-size: 2rem;
  font-family: ${primaryFont};
`;

const SignupLabel = styled(Label)`
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.label};
  font-size: 1rem;
  text-decoration-color: ${({ theme }) => theme.label};
`;

const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.label};
  margin-left: 0.3rem;
`;

export { SingupContainer, SignUpHeader, SignUpTitle, SignupLabel, LoginLink };
