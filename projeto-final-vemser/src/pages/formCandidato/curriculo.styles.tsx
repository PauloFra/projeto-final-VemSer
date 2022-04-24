import styled from "styled-components";
import { Field } from "formik";

export const ContainerGeral = styled.div`
  font-size: 17px;
  margin: 0 auto;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  form {
    gap: 15px 150px;
    padding: 0px 30px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    border: 1px solid rgb(159, 162, 180);
    border-radius: 8px;
  }
`;
export const TitleForm = styled.h1`
  color: rgb(51, 51, 51);
  margin: 20px 0;
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  input {
    width: 250px;
    margin-top: 5px;
    border-radius: 9px;
    height: 30px;
    padding-left: 5px;
    font-size: 15px;
    border: 1px solid rgb(159, 162, 180);

    color: rgb(159, 162, 180);
    ::placeholder {
      color: rgb(159, 162, 180);
    }
  }
`;
export const DivRowFlex = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
  }
`;
export const Label = styled.label`
  color: rgb(159, 162, 180);
  font-weight: bold;
  text-transform: capitalize;
`;
export const TitleInfoTopic = styled.h2`
  color: rgb(51, 51, 51);
  grid-column-start: 1;
  grid-column-end: 3;
  align-self: end;
`;

export const DivError = styled.div`
  margin: 3px 0px 0px 5px;
  color: #ff6969;
  font-weight: bold;
  font-size: 14px;
`;
/* FORM */

export const ContainerInputs = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 250 250px;
  grid-template-rows: 78px 78px;
  /* validar responsivo */
`;

export const Botao = styled.button`
  border-radius: 10px;
  border: none;
  background-color: #3f6abf;
  padding: 12px 0;
  margin: 20px;
  font-size: 20px;
  transition: 1s;
  color: white;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  grid-column: 1/3;
  cursor: pointer;
  :hover {
    transition: 1s;
    background-color: #2c7bbf;
  }
`;

export const CheckBox = styled(Field)`
  height: 24px;
  width: 24px;
  margin-left: 5px;
`;
