import styled from "styled-components";

export const BackGroundTabela = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  height: calc(100vh - 65px);
`;
export const DivMenu = styled.div`
  padding-left: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  a {
    color: #777777;
    :hover {
      color: #a6aec1;
    }
  }
`;

export const Title = styled.h1`
  color: #777777;
  /*  margin-bottom: 24px; */
`;
export const SubTitle = styled.h3`
  padding-top: 10px;
`;

export const Tabela = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0px;
  /* background-color: rgb(207, 213, 225, 0.5); */
  border: 1.5px solid #dfe0eb;
`;

export const TrTabela = styled.tr`
  &:nth-child(even) {
    background-color: rgb(237, 237, 242, 0.5);
  }
`;

export const TdTabela = styled.td`
  border-bottom: 1.5px solid #dfe0eb;
  color: #777777;
  font-size: 18px;
  height: 70px;
  a {
    color: #777777;
    :hover {
      color: #a6aec1;
    }
  }
`;

export const TheadTabela = styled.thead`
  height: 90px;
  background-color: rgb(237, 237, 242, 0.5);
  font-size: 24px;
  color: #a8a8a8;
`;
