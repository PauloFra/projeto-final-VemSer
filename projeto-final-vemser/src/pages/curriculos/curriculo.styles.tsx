import styled from "styled-components";
import { Field } from "formik";

export const ContainerGeral = styled.div`
  font-size: 17px;
  margin: 0 auto;
  width: 1600px;
  height: calc(100vh - 50px);
`;
export const TitleForm = styled.h1`
  color: rgb(51, 51, 51);
  margin: 30px 0;
  width: 320px;
`;
export const StyleContainer = styled.div`
  border-radius: 10px;
  padding: 30px;
  -webkit-box-shadow: 5px 6px 18px 3px rgba(0, 0, 0, 0.39);
  box-shadow: 5px 6px 18px 3px rgba(0, 0, 0, 0.39);
  margin: 30px 0;
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  input {
    width: 300px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 9px;
    padding: 8px 10px;
    font-size: 17px;
    border: 1px solid rgb(159, 162, 180);
  }
`;
export const Label = styled.label`
  color: rgb(159, 162, 180);
  font-weight: bold;
`;
export const TitleInfoTopic = styled.h2`
  color: rgb(51, 51, 51);
  grid-column-start: 1;
  grid-column-end: 3;
  width: 300px;
`;

export const DivError = styled.div`
  color: #ff6969;
  font-weight: bold;
`;
/* FORM */
export const ContainerForm = styled.div`
  row-gap: 30px;
  display: grid;
  grid-template-columns: auto auto;
`;

export const ContainerInputs = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 300px 300px;
`;

export const Botao = styled.button`
  border-radius: 10px;
  border: 1px solid rgb(159, 162, 180);
  background-color: #3f6abf;
  padding: 12px 0;
  font-size: 20px;
  transition: 1s;
  color: white;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  cursor: pointer;
  :hover {
    transition: 1s;
    background-color: #2c7bbf;
  }
`;

/* export const Input = styled(Field)`
  width: 300px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 9px;
  padding: 8px 10px;
  font-size: 17px;
  border: 1px solid rgb(159, 162, 180);
`; */
