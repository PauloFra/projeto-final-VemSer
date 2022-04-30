import styled from "styled-components";
import Theme from "../../theme/Theme";
export const BackGroundTabela = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 3%;
  min-height: 94vh;
  margin: 0 auto;
  border-radius: 16px;
  margin-bottom: 20px;
  background-color: ${Theme.color.background};
`;
export const Tabela = styled.table`
  width: 100%;
  box-shadow: ${Theme.shadow.container};
  margin: 0 auto;
  text-align: left;
  border-spacing: 0;
  border-radius: 10px;
`;
export const DivMenu = styled.div<{ flexD?: string }>`
  height: 100%;
  margin: 40px 0px 20px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-direction: ${(props) => props.flexD};
  a {
    color: #777777;
    font-size: 50px;
    :hover {
      color: red;
    }
  }
  */ button {
    border: none;
  }
`;

export const DivAlignTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;
export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    color: ${Theme.fontColor.primary};
    margin-right: 5px;
    height: 20px;
    width: 20px;
    position: absolute;
    right: 0;
  }
`;

export const TBodyTable = styled.tbody``;

export const Title = styled.h1`
  font-size: 40px;
  color: ${Theme.fontColor.primary};
`;
export const SubTitle = styled.h3`
  padding-top: 5px;
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
  font-size: 18px;
  height: 10px;
  padding: 20px 0 20px 20px;
`;

export const TheadTabela = styled.thead`
  height: 80px;
  background-color: rgb(237, 237, 242, 0.5);
  font-size: 24px;
  color: rgb(168, 168, 168);
`;
export const ContainerButtonsPage = styled.div`
  padding: 10px 0px 10px 10px;
  display: flex;
  height: 100%;
  align-items: end;
  font-size: 14px;
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
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
export const Search = styled.input`
  padding-left: 10px;
  font-size: 18px;
  width: 316px;
  height: 42px;
  margin: 0 0 0 15px;
  border-radius: 8px;
  border: 1px solid ${Theme.fontColor.primary};
  color: #8d8d8d;
  outline: none;
  &::placeholder {
    color: ${Theme.color.primary};
    font-weight: bold;
  }
  &:focus {
    border: 1px solid ${Theme.color.primary};
  }

  :focus::placeholder {
    color: ${Theme.fontColor.primary};
  }
`;
export const ButtonVisualizar = styled.button`
  padding: 4px;
  border: 1.5px solid ${Theme.color.primary};
  font-weight: bold;
  color: ${Theme.color.primary};
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  :hover {
    background: ${Theme.color.primary};
    color: white;
  }
  :active {
    box-shadow: 0 1px #666;
    transform: translateY(0.5px);
  }
`;

export const SpanDefault = styled.span`
  font-weight: bold;
  font-size: 15px;
`;
export const SpanDefaultHour = styled.span`
  margin-right: 10px;
  color:${Theme.fontColor.primary}; 
  font-size: 15px;
`;
export const BtnSeta = styled.button`
  color: ${Theme.color.primary};
  svg {
    font-size: 16px;
    :hover {
      color: ${Theme.color.hover};
    }
  }
`;
export const DivAuxiliar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  flex-direction: column;
  border: 1px solid #dfe0eb;
`;
export const ThTabela = styled.th<{
  align?: string;
  radius?: string;
}>`
  font-size: 20px;
  text-align: ${(props) => props.align};
  border-radius: ${(props) => props.radius};
  padding-left: 20px;
  color: ${Theme.fontColor.secondary};
  background-color: ${Theme.color.primary};
  border-bottom: 1.5px solid #dfe0eb;
  :last-child {
    padding-right: 20px;
  }
`;

export const ContainerGeralTabela = styled.div<{
  flexD?: string;
  border?: string;
}>`
  flex-direction: ${(props) => props.flexD};
  border: ${(props) => props.border};
  display: flex;
  min-height: 725px;
  justify-content: space-between;
  border-radius: 10px;
`;
