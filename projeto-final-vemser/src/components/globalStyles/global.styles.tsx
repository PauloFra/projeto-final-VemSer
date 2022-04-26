import styled from "styled-components";

export const ThDefaultDescrition = styled.tr`
    padding:14px ;
    border-bottom: 1px solid #DFE0EB;
    font-weight: bold;
    
    
`

export const TableCandidates = styled.table<{
    width?: string
  }>`
  
    width: ${props => props.width};
    padding: 0 20px;
    text-transform: capitalize;
    text-align: left;
    font-size: 19px;
    border-collapse:collapse;
    
`  
export const TableTr = styled.tr`
    
    border-bottom: 1px solid #DFE0EB;
`  
export const TableTh = styled.th<{
    align?: string
  }>`
    text-align: ${props => props.align};
    color: rgb(159,162,180);
    font-weight: bold;    
    padding: 10px 25px;
    text-transform: capitalize;
` 
export const TableTd = styled.td<{
    align?: string
  }>`
    text-align: ${props => props.align};
    padding: 25px;    
` 
export const TableHead = styled.thead`
    
`
export const TableBody = styled.tbody`
  
`
export const ContainerButtonsPage = styled.div`
  display: flex;
`; 
export const ContainerGeral = styled.div<{
    border?: string
  }>`
    padding:30px 0 ;
    display: flex;
    flex-direction: column;
    width:80%;
    border-radius: 10px;
    justify-content: center;
    margin: 20px auto;
    border: 1px solid black;
    padding: 40px 0;
    
    border: ${props => props.border};
`  
export const DivMenu = styled.div`
    display: flex;
    margin:20px;
    justify-content: space-between;
`
export const ContainerGeralTabela = styled.div`
  display: flex;
`;
export const ContainerContent = styled.div`
display: flex;
`  

export const TitleH = styled.h1`
color:rgb(51,51,51);
margin-bottom: 24px;
`  