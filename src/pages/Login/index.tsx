import { Col, Container, Row } from "react-bootstrap";
import { Logo } from "src/components/svgs";
import { SignIn } from "src/components";
import { Aside } from "./style";

export default function Login() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="p-0" md={5}>
          <header className="p-5">
            <Logo />
          </header>
          <SignIn />
        </Col>
        <Col className="p-0" md={7}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
