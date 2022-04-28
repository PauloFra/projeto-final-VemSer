import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
type DivForLoadingProps = {
  largura?: string;
  altura?: string;
};
export const DivForLoading = styled.div<DivForLoadingProps>`
  min-width: ${(props) => props.largura};
  min-height: ${(props) => props.altura};
  display: flex;
  align-items: center;
  justify-content: center;
`;
