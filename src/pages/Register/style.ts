import styled from "styled-components";
import abstractBg from "src/assets/imgs/login/backgrounds/abstract.png";

const Aside = styled.aside`
  background-image: url(${abstractBg});
  border-bottom-left-radius: 3rem;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
`;

export { Aside, Form };
