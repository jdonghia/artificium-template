import styled from "styled-components";
import { styledHelper } from "src/helpers";

const { getColor } = styledHelper;

const Checkbox = styled.input`
  border: none;
  background: ${getColor("noble-black-600")};
`;

const CheckboxLabel = styled.label`
  color: ${getColor("noble-black-200")};
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmphasisTitle = styled.em`
  background-image: linear-gradient(#4d62e5, #87ddee, #b6f09c);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: 700;
`;

const ForgotPassword = styled.button`
  background-clip: text;
  background-image: ${getColor("gradient-blue")};
  border: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
  -webkit-text-fill-color: transparent;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 0 2rem 3rem;
`;

const FooterText = styled.p`
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  color: ${getColor("noble-black-400")};
`;

const FormWrapper = styled.main`
  width: 70%;
`;

const Input = styled.input`
  background: ${getColor("noble-black-600")};
  border: 1px solid ${getColor("noble-black-500")};
  border-radius: 0.5rem;
  color: white;
  transition: 0.2s ease-in-out;
  width: 100%;

  &:focus {
    box-shadow: 0px 0px 0px 0.25rem rgba(132, 220, 245, 0.24);
    outline: #84dcf53d solid 1px;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: #b6f09c;
  border-radius: 0.75rem;
  color: ${getColor("day-blue")};
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  border: none;
`;

const SocialLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${getColor("noble-black-600")};
  border-radius: 0.75rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  color: ${getColor("noble-black-400")};
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  width: 14.75rem;
`;

const Spanbar = styled.span`
  width: 40%;
  display: block;
  height: 1px;
  background: ${getColor("noble-black-500")};
`;

const SpanText = styled.p`
  color: ${getColor("noble-black-400")};
  font-size: 12px;
  margin-top: 12px;
  width: 20%;
`;

const SpanbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${getColor("noble-black-300")};
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 1.75rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 2.75rem;
`;

const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  EmphasisTitle,
  ForgotPassword,
  Footer,
  FooterText,
  FormWrapper,
  Input,
  LoginButton,
  SocialLoginButton,
  SocialLoginWrapper,
  Spanbar,
  SpanText,
  SpanbarWrapper,
  Subtitle,
  Title,
};
