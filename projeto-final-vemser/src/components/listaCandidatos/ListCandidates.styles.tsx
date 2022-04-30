import styled from "styled-components";
import Theme from "../../theme/Theme";

export const Input = styled.input`
  padding-left: 10px;
  font-size: 18px;
  width: 316px;
  height: 42px;
  margin: 0 0 0 15px;
  border-radius: 8px;
  border: 2px solid #f0f1f7;
  color: #8d8d8d;
  outline: none;
  &::placeholder {
    color: #9fa2b4;
  }
  &:focus {
    border: 2px solid #9fa2b4;
  }
`;

export const DivAlignTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;
export const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonClose = styled.button`
  background-color: transparent;
  font-size: 33px;
  cursor: pointer;
  border: none;
`;

export const TBodyTable = styled.tbody``;

export const ButtonPage = styled.button`
  padding: 2px 6px;
  background-color: #ccc;
  font-size: 20px;
`;

export const BackGroundTabela = styled.div`
  background-color: ${Theme.color.background};
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: ${Theme.fontColor.primary};
  /*  margin-bottom: 24px; */
`;

export const Tabela = styled.table`
  min-width: 1020px;
  box-shadow: ${Theme.shadow.container};
  border-radius: 10px;
  text-align: left;
  border-spacing: 0;
`;

export const TrTabela = styled.tr`
  &:nth-child(even) {
    background-color: ${Theme.color.secondary};
  }
`;

export const TdTabela = styled.td<{ align?: string }>`
  text-align: ${(props) => props.align};
  border-bottom: 1.5px solid #dfe0eb;
  color: ${Theme.fontColor.primary};
  font-size: 16px;
  height: 10px;
  padding: 10px 0 10px 20px;
`;

export const TheadTabela = styled.thead`
  height: 50px;
  font-size: 24px;
  color: rgb(168, 168, 168);
`;
export const ContainerButtonsPage = styled.div`
  padding: 10px 0px 10px 20px;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  position: relative;
  bottom: 0;
  color: ${Theme.color.primary};
  button {
    display: flex;
    margin: 0 10px;
    align-items: center;
    font-size: 17px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
export const BtnSeta = styled.button`
  /*   background-color: red;
  border: 5px solid #dfe0eb; */
  color: ${Theme.color.primary};
  svg {
    font-size: 16px;
    :hover {
      color: ${Theme.color.hover};
    }
  }
`;
export const SpanDefault = styled.span`
  font-weight: bold;
  font-size: 15px;
`;
export const ButtonVisualizar = styled.button`
  padding: 4px;
  border: 1.5px solid ${Theme.color.primary};
  font-weight: bold;
  font-size: 13px;
  color: ${Theme.color.primary};
  border-radius: 3px;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  :hover {
    background: ${Theme.color.primary};
    color: white;
  }

  :disabled {
    background-color: rgb(204, 204, 204);
    color: #918e8e;
    border: 1.5px solid rgb(204, 204, 204);
  }
`;
export const DivAuxiliar = styled.div`
  width: 100%;
  display: flex;
  min-height: 500px;
  justify-content: space-between;
  border-radius: 10px;
  flex-direction: column;
  border: 1px solid #dfe0eb;
`;
export const ThTabela = styled.th<{
  align?: string;
  radius?: string;
}>`
  font-size: 17px;
  text-align: ${(props) => props.align};
  border-radius: ${(props) => props.radius};
  padding: 0 20px;
  background-color: ${Theme.color.primary};
  color: ${Theme.fontColor.secondary};
  :first-child {
    border-top-left-radius: 10px;
  }
  :last-child {
    border-top-right-radius: 10px;
  }

  border-bottom: 1.5px solid #dfe0eb;
`;
