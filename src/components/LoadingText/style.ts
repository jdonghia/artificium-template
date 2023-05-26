import { motion } from "framer-motion";
import { styled } from "styled-components";

const Dots = styled(motion.span)`
  display: inline-block;
`;

const Text = styled(motion.p)`
  background-image: linear-gradient(#4d62e5, #87ddee, #b6f09c);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: 700;
`;

export { Dots, Text };
