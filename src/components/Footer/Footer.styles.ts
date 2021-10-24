import styled from "styled-components";
import { HiCode } from "react-icons/hi";

import {
  zindex_one,
  primaryFont,
  WidthContainer,
} from "../../styles/common.styles";

const bgColor = "#000";
const textColor = "#E4E6EB";

const FooterContainer = styled.article`
  background-color: ${bgColor};
  color: ${textColor};
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: auto;
  z-index: ${zindex_one};
`;

const FooterContent = styled(WidthContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterText = styled.span`
  display: flex;
  align-items: center;
  font-family: ${primaryFont};

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
  color: ${textColor};
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
  FooterContent,
};
