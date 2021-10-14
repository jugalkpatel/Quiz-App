import styled from "styled-components";
import { Field } from "formik";
import { Link } from "react-router-dom";

const primaryFont = "Alegreya";
const secondaryFont = "QuickSand";

const zindex_one = 1;

const WidthContainer = styled.article`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 786px) {
    padding: 0.6rem 1rem;
  }

  @media (min-width: 970px) {
    padding: 0.6rem 0;
  }
`;

const BigText = styled.h1`
  font-size: 1.5rem;
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

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.primary};
  border: 0;
  font-family: ${primaryFont};
  font-size: 1rem;
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
  Label,
  SubText,
  Input,
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
