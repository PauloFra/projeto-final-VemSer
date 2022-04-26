import styled from "styled-components";
export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
export const ContainerInfoCandidato = styled.div`
  display: flex;
`;
export const ContainerGeralTabela = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;
export const TableCandidates = styled.table`
  text-align: left;
  border-collapse: collapse;
  text-align: start;
  height: calc(100vh - 50px);
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerButtonsPage = styled.div`
  display: flex;
`;
export const ContainerContent = styled.div`
  display: flex;
`;

export const TableTr = styled.tr`
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 50%;
`;
export const Li = styled.li`
  height: 200px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
`;
export const CardCandidato = styled.div`
  display: flex;
  svg {
    height: 100px;
    width: 100px;
    color: #ccc;
  }
`;
export const Info = styled.p`
  font-size: 20px;
`;
export const DadosPessoais = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableTh = styled.th``;
export const TableTd = styled.td``;
export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;
