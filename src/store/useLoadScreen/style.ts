import styled from "styled-components";

import { styledHelper } from "src/helpers";

const { getColor } = styledHelper;

const LoadScreenWrapper = styled.div`
  align-items: center;
  background: ${getColor("noble-black-700")};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export { LoadScreenWrapper };
