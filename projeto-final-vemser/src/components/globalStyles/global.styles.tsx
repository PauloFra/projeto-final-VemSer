import styled from "styled-components";


export const BackGroundTabela = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-bottom: 50px;
  margin: 50px auto;
  /* height: calc(100vh - 65px); */
`;
export const DivMenu = styled.div`
  padding: 20px 0px 10px 30px;
  height: 100%;
  margin-bottom: 30px;
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
  min-height: 701px;
  border-radius: 4px;
  text-align: left;
  border-spacing: 0px;
  /* background-color: rgb(207, 213, 225, 0.5); */
  border: 1.5px solid #dfe0eb;
`;
export const ContainerGeralTabela = styled.div`
  display: flex;
`;
export const TrTabela = styled.tr`
  &:nth-child(even) {
    background-color: rgb(237, 237, 242, 0.5);
  }
`;

export const TdTabela = styled.td<{
  align?: string;
}>`
  text-align: ${(props) => props.align};
  border-bottom: 1.5px solid #dfe0eb;
  color: #777777;
  font-size: 18px;
  height: 10px;
  padding:20px; 
  a {
    color: #777777;
  }
`;
export const ThTabela = styled.th<{
  align?: string;
}>`
text-align: ${(props) => props.align};
padding: 35px 0  0 20px;
max-height: 50px;
border-bottom: 1.5px solid #dfe0eb;

`

;

export const TheadTabela = styled.thead`
  height: 90px;
  background-color: rgb(237, 237, 242, 0.5);
  font-size: 24px;
  
  color: #a8a8a8;
`;
export const ContainerButtonsPage = styled.div`
  padding: 10px 0px 10px 20px;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  position: relative;
  bottom: 0;

  button {
    display: flex;
    margin :0 10px;
    align-items: center;
    font-size: 17px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;