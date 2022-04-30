import styled from "styled-components";
import { Field } from "formik";
import Theme from "../../theme/Theme";
export const ContainerGeral = styled.div`
  font-size: ${Theme.fontSize.media};
  margin: 0 auto;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 65px);
  margin-bottom: ${Theme.space.default};
  background-color: ${Theme.color.background};
  form {
    -webkit-box-shadow: 20px 18px 50px 5px rgba(0, 0, 0, 0.16);
    box-shadow: 20px 18px 50px 5px rgba(0, 0, 0, 0.16);
    gap: 15px 150px;
    padding: 0px 30px 20px 30px;
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    border: 1px solid ${Theme.color.secondary};
    border-radius: 8px;
    background-color: ${Theme.color.secondary};
  }
`;

export const TitleForm = styled.h1`
  color: ${Theme.color.primary};
  margin: 20px 0;
`;

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  input {
    width: 250px;
    margin-top: 8px;
    border-radius: 9px;
    height: 30px;
    padding: 4px 0 4px 7px;
    font-size: 15px;
    border: 1px solid ${Theme.fontColor.primary};
    color: ${Theme.fontColor.primary};
    outline: none;
    ::placeholder {
      color: ${Theme.fontColor.primary};
    }
    :focus {
      border: 1px solid ${Theme.color.primary};
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
  color: ${Theme.fontColor.primary};
  font-weight: bold;
  text-transform: capitalize;
`;
export const TitleInfoTopic = styled.h2`
  color: ${Theme.color.primary};
  grid-column-start: 1;
  grid-column-end: 3;
  align-self: flex-end;
`;
export const DivCabeçalho = styled.div`
  color: ${Theme.fontColor.primary};
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const DivError = styled.div`
  margin: 3px 0px 0px 5px;
  color: ${Theme.color.error};
  font-weight: bold;
  font-size: 14px;
`;

export const ContainerInputs = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 250 250px;
  grid-template-rows: 78px 78px;
`;

export const Botao = styled.button`
  border: 1px solid ${Theme.color.primary};
  background-color: transparent;
  padding: 12px 0;
  border-radius: 10px;
  color: ${Theme.color.primary};
  font-weight: bold;
  margin: 20px 500px;
  font-size: 20px;
  grid-column: 1/3;
  cursor: pointer;
  :hover {
    color: white;
    border: 1px solid white;
    background-color: ${Theme.color.primary};
  }
`;

export const CheckBox = styled(Field)`
  height: 24px;
  width: 24px;
  margin-left: 5px;
`;

export const ButtonExcluir = styled.button`
  color: ${Theme.color.error};
  background-color: transparent;
  border: 0.5px solid rgb(255, 0, 0, 0.3);
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 6px;
  :hover {
    background-color: rgb(255, 204, 204, 0.5);
  }
`;
export const ButtonAdd = styled.button`
  font-weight: bold;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  padding: 4px 0;
  :hover {
    background-color: ${Theme.color.secondary};
  }
`;
export const labelFile = styled.label`
  color: ${Theme.color.secondary};
  font-weight: bold;
  text-transform: capitalize;
`;
export const inputFile = styled.input`
  display: none;
`;
export const TextFile = styled.p`
  display: flex;
  column-gap: 10px;
  align-items: center;
  svg {
    font-size: 22px;
  }
`;
