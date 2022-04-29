import styled from "styled-components";

export const Nav = styled.nav`
  padding-left: 20px;
`;

export const Ul = styled.ul`
  padding: 20px 20px 20px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Li = styled.li`
  cursor: pointer;
`;
export const TBodyTable = styled.tbody`
 
`;

export const ContainerInfoCandidato = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;

 
`;
export const InfoCandidato = styled.p`
  font-weight: bold;
`;
export const RetornoApi = styled.span`
  font-weight: normal;
`;
export const DivButtonsPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const ButtonPage = styled.button`
padding: 2px 6px;

background-color: #CCC;
font-size:20px;

`;

export const BackGroundTabela = styled.div`
  
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

export const Title = styled.h1`
  color: rgb(51, 51, 51);
  /*  margin-bottom: 24px; */
`;
export const SubTitle = styled.h3`
  padding-top: 5px;
`;

export const Tabela = styled.table`
  min-width: 1020px;

  
  text-align: left;
  border-spacing: 0;

  
  /* background-color: rgb(207, 213, 225, 0.5); */
`;
export const ContainerGeralTabela = styled.div`
  display: flex;
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
  font-size: 16px;

  height: 10px;
  padding:10px 0 10px 20px;
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
export const SpanDefault = styled.span`
font-weight: bold;
font-size: 15px;
  `
export const ButtonVisualizar = styled.button`
  padding: 4px;
  border: 1.5px solid rgb(15, 98, 254);
  font-weight: bold;
  font-size: 13px;
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
export const DivAuxiliar = styled.div`
width: 100%;
display: flex;
min-height: 500px;
justify-content: space-between;
border-radius: 10px;
flex-direction: column;
border: 1px solid #dfe0eb;
`
export const ThTabela = styled.th<{
  align?: string
  radius?: string;
}>`
  font-size:17px;
  text-align: ${(props) => props.align};
  border-radius: ${(props) => props.radius};
  padding:0 20px;
  background-color: rgb(204, 204, 204);
  color: #444;


  border-bottom: 1.5px solid #dfe0eb;
`;  