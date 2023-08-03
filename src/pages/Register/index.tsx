import { Col, Container, Row } from "react-bootstrap";
import { Logo } from "src/components/svgs";
import { Button as RegisterButton, Input } from "src/styles/common";
import { Aside, Form as FormWrapper } from "./style";

function Form(): JSX.Element {
  return (
    <Container className="w-75">
      <h2 className="h1 mb-5">
        Connect with your team and bring your
        <br />
        creative ideas to life.
      </h2>
      <Row>
        <Col className="p-0">
          <Input type="text" placeholder="First name" className="mb-4" />
          <Input type="password" placeholder="Password" />
        </Col>
        <Col className="p-0">
          <Input type="email" placeholder="Email" className="mb-4" />
          <Input type="password" placeholder="Repeat password" />
        </Col>
        <RegisterButton>Create free account</RegisterButton>
      </Row>
    </Container>
  );
}

export default function Register(): JSX.Element {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="p-0" md={7}>
          <header className="p-5">
            <Logo />
          </header>
          <Form />
        </Col>
        <Col className="p-0" md={5}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
