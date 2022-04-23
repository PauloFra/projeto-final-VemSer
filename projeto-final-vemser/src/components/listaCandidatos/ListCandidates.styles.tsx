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

export const ContainerInfoCandidato = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  transition: 1s;
  :hover{
    transition: 1s;
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.56);
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.56);
    box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.56)}
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
