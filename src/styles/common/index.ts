import styled from "styled-components";
import { styledHelper } from "src/helpers";

const { getColor } = styledHelper;

const Input = styled.input`
  background: ${getColor("noble-black-600")};
  border: 1px solid ${getColor("noble-black-500")};
  border-radius: 0.5rem;
  color: white;
  transition: 0.2s ease-in-out;
  width: 100%;
  padding: 0.5rem;

  &:focus {
    box-shadow: 0px 0px 0px 0.25rem rgba(132, 220, 245, 0.24);
    outline: #84dcf53d solid 1px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background: #b6f09c;
  border-radius: 0.75rem;
  color: ${getColor("day-blue")};
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  border: none;
`;

export { Input, Button };
