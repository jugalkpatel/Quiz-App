import styled from "styled-components";
import { quiz_black, primary_white } from "../../styles/colors.styles";
import { HiCode } from "react-icons/hi";

const FooterContainer = styled.article`
  background-color: ${quiz_black};
  color: ${primary_white};
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: auto;
`;

const FooterText = styled.span`
  display: flex;
  align-items: center;

  font-size: 0.8rem;
`;

const CodeIcon = styled(HiCode)`
  font-size: 1rem;
  margin: 0 0.5rem;
`;

const LinkButton = styled.a.attrs((_) => ({ target: "_blank" }))`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${primary_white};
  margin: 0 0.1rem;

  @media (min-width: 568px) {
    margin: 0 0.3rem;
  }
`;

const FooterIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.3rem;
`;

export {
  FooterContainer,
  FooterIconsWrapper,
  FooterText,
  CodeIcon,
  LinkButton,
};
