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
  padding: 0.7rem;
  max-width: 960px;

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
  margin: 0;
  color: ${({ theme }) => theme.tertiary};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.tertiary};
  font-family: ${primaryFont};
  font-size: 1.6rem;
`;

const Input = styled(Field)`
  font-size: 1.1rem;
  padding: 0.5rem 0.7rem;
  border: 1px solid ${({ theme }) => theme.border};
  outline-color: ${({ theme }) => theme.tertiary};
  border-radius: 0.3rem;
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.primary};
  font-family: ${primaryFont};
  font-size: 1rem;
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
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.label};
  font-size: 1rem;
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
};
