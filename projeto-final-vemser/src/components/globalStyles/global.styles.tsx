import styled from "styled-components";

export const BackGroundTabela = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  min-height: 94vh;
  margin: 0 auto;
  border-radius: 16px;
  margin-bottom: 20px;
`;
export const DivMenu = styled.div`
  height: 100%;
  margin: 40px 0px 20px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  a {
    color: #777777;
    :hover {
      color: #a6aec1;
    }
  }
  button {
    border: none;
  }
`;
export const TBodyTable = styled.tbody``;
export const Title = styled.h1`
  font-size: 40px;
  color: rgb(51, 51, 51);
  /*  margin-bottom: 24px; */
`;
export const SubTitle = styled.h3`
  padding-top: 5px;
`;

export const Tabela = styled.table`
  width: 100%;
  margin: 0 auto;
  /* min-height: 701px; */
  text-align: left;
  border-spacing: 0;

  border-radius: 10px;
  /* background-color: rgb(207, 213, 225, 0.5); */
`;

export const TrTabela = styled.tr`
  &:nth-child(even) {
    background-color: rgb(237, 237, 242, 0.5);
  }
`;

export const TdTabela = styled.td<{ align?: string }>`
  text-align: ${(props) => props.align};
  border-bottom: 1.5px solid #dfe0eb;
  color: #444444;
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
  padding: 10px 0px 10px 20px;
  display: flex;

  height: 100%;
  align-items: end;
  font-size: 14px;
  position: relative;
  bottom: 0;

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

export const ButtonVisualizar = styled.button`
  padding: 4px;
  border: 1.5px solid rgb(15, 98, 254);
  font-weight: bold;
  color: rgb(15, 98, 254);
  border-radius: 3px;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  :hover {
    background: rgb(15, 98, 254);
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
export const BtnSeta = styled.button`
  background-color: RED;
  border: 5px solid #dfe0eb;
`;
export const DivAuxiliar = styled.div`
  width: 100%;
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
  color: #444;
  background-color: rgb(108, 120, 142, 0.5);
  border-bottom: 1.5px solid #dfe0eb;
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
