import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "src/components/svgs";
import { useLoading } from "src/store";
import { fadeAnimation } from "src/animations/framer-motion";
import { Input, Button as LoginButton } from "src/styles/common";
import {
  Aside,
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  EmphasisTitle,
  Footer,
  FooterText,
  FormWrapper,
  ForgotPassword,
  SocialLoginButton,
  SocialLoginWrapper,
  Spanbar,
  SpanbarWrapper,
  SpanText,
  Subtitle,
  Title,
} from "./style";

function Form() {
  const navigate = useNavigate();

  const { showLoading, hideLoading } = useLoading();

  const simulateLoading = () => {
    showLoading();
    setTimeout(() => hideLoading(), 3000);
  };

  return (
    <FormWrapper className="mx-auto my-5">
      <motion.div variants={fadeAnimation} initial="initial" animate="animate">
        <Title>
          Let`s get <EmphasisTitle>creative!</EmphasisTitle>
        </Title>
        <Subtitle className="mt-3">
          Log in to Artificium to start creating magic.
        </Subtitle>
      </motion.div>
      <div className="w-100">
        <div className="my-5">
          <Input type="email" placeholder="Email" className="mb-3" />
          <Input type="password" placeholder="Password" />
        </div>
        <CheckboxWrapper className="w-100">
          <CheckboxLabel htmlFor="checkbox">
            <Checkbox type="checkbox" id="checkbox" />
            Remember me
          </CheckboxLabel>
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </CheckboxWrapper>
        <LoginButton className="w-100 mt-5" onClick={simulateLoading}>
          Log in
        </LoginButton>
        <SpanbarWrapper className="mt-5">
          <Spanbar />
          <SpanText>or continue with</SpanText>
          <Spanbar />
        </SpanbarWrapper>
        <SocialLoginWrapper className="mt-4">
          <SocialLoginButton className="me-3">
            <img
              src="src/assets/imgs/logos/google.png"
              alt="Google Logo"
              className="me-2"
            />
            Google Account
          </SocialLoginButton>
          <SocialLoginButton className="ms-3">
            <img
              src="src/assets/imgs/logos/apple.png"
              alt="Apple Logo"
              className="me-2"
            />
            Apple Account
          </SocialLoginButton>
        </SocialLoginWrapper>
        <Footer>
          <FooterText>
            Don`t have an account?
            <ForgotPassword onClick={() => navigate("/register")}>
              Sign Up
            </ForgotPassword>
          </FooterText>
        </Footer>
      </div>
    </FormWrapper>
  );
}

export default function Login() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="p-0" md={5}>
          <header className="p-5">
            <Logo />
          </header>
          <Form />
        </Col>
        <Col className="p-0" md={7}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
