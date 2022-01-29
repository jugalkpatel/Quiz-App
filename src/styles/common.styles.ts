import styled from "styled-components";
import { Field } from "formik";
import { Link } from "react-router-dom";

const primaryFont = "Alegreya";
const secondaryFont = "QuickSand";

const zindex_one = 1;
const zindex_two = 2;
const zindex_three = 3;
const zindex_four = 4;

const WidthContainer = styled.article`
  max-width: 960px;
  font-family: ${primaryFont};

  padding: 0.7rem;

  @media (min-width: 786px) {
    padding: 0.6rem 1rem;
  }

  @media (min-width: 960px) {
    width: 960px;

    margin: 0 auto;
  }

  @media (min-width: 970px) {
    padding: 0.6rem 0;
  }
`;

const BigText = styled.h1`
  font-size: 1.5rem;
  font-family: ${primaryFont};
`;

const SubText = styled.p`
  color: ${({ theme }) => theme.tertiary};

  margin: 0;
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.tertiary};
`;

const Input = styled(Field)`
  font-size: 1.1rem;

  padding: 0.5rem 0.7rem;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.3rem;

  outline-color: ${({ theme }) => theme.tertiary};
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.primary};
  font-weight: 600;

  background-color: ${({ theme }) => theme.tertiary};

  border: 1px solid ${({ theme }) => theme.tertiary};
  border-radius: 0.3rem;

  padding: 0.5rem 1rem;

  cursor: pointer;
`;

const SubmitButton = styled(PrimaryButton).attrs(() => ({
  type: "submit",
}))`
  width: 100%;

  margin: 0.5rem 0;
`;

const RowContainer = styled.article`
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.article`
  display: flex;
  flex-direction: column;

  margin: 1.5rem 0;
`;

const FormContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: 568px) {
    width: 25.6rem;
    margin: 0 auto;
  }
`;

const FormHeader = styled.h1`
  display: flex;
  flex-direction: column;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const FormLabel = styled(Label)`
  font-size: 1rem;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.label};

  text-decoration-color: ${({ theme }) => theme.label};
`;

const FormTitle = styled(Label)`
  font-size: 2rem;
  font-family: ${primaryFont};
`;

const FormLink = styled(Link)`
  color: ${({ theme }) => theme.label};

  margin-left: 0.3rem;
`;

const ModalBackContainer = styled(RowContainer)`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export {
  WidthContainer,
  primaryFont,
  secondaryFont,
  zindex_one,
  zindex_two,
  zindex_three,
  zindex_four,
  Label,
  SubText,
  Input,
  PrimaryButton,
  SubmitButton,
  RowContainer,
  InputWrapper,
  ColumnContainer,
  BigText,
  FormContainer,
  FormHeader,
  FormLabel,
  FormTitle,
  FormLink,
  ModalBackContainer,
};
