import { motion } from "framer-motion";

import { useLoading } from "src/store";

import {
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  EmphasisTitle,
  Footer,
  FooterText,
  FormWrapper,
  ForgotPassword,
  Input,
  LoginButton,
  SocialLoginButton,
  SocialLoginWrapper,
  Spanbar,
  SpanbarWrapper,
  SpanText,
  Subtitle,
  Title,
} from "./style";

const fadeAnimation = {
  initial: { opacity: 0, x: -25 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function SignIn() {
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
          <Input type="email" placeholder="Email" className="py-2 px-4 mb-3" />
          <Input type="password" placeholder="Password" className="py-2 px-4" />
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
              src="src/assets/imgs/google-logo.png"
              alt="Google Logo"
              className="me-2"
            />
            Google Account
          </SocialLoginButton>
          <SocialLoginButton className="ms-3">
            <img
              src="src/assets/imgs/apple-logo.png"
              alt="Apple Logo"
              className="me-2"
            />
            Apple Account
          </SocialLoginButton>
        </SocialLoginWrapper>
        <Footer>
          <FooterText>
            Don`t have an account?
            <ForgotPassword>Sign Up</ForgotPassword>
          </FooterText>
        </Footer>
      </div>
    </FormWrapper>
  );
}
