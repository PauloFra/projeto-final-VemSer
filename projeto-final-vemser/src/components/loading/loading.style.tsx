import styled from "styled-components";
type DivForLoadingProps = {
  largura?: string;
  altura?: string;
  padding?:string;
};
export const DivForLoading = styled.div<DivForLoadingProps>`
  min-width: ${(props) => props.largura};
  min-height: ${(props) => props.altura};
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
  justify-content: center;
`;
