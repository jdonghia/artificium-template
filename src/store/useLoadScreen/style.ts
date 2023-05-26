import styled from "styled-components";

import { styledHelper } from "src/helpers";

const { getColor } = styledHelper;

const LoadScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: ${getColor("noble-black-700")};
`;

export { LoadScreenWrapper };
