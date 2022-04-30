import styled from "styled-components";
import Theme from "../../theme/Theme";

export const ContainerLogin = styled.div`

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  background-color: ${Theme.color.background};
`;

export const DivLogo = styled.div`
  margin: 15px 0px 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleLogin = styled.h1`
  font-size: 27px;
  margin-top: 25px;
  color:  ${Theme.color.primary};
  opacity: 0.7;
`;

export const DivForm = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  `;
export const Label = styled.label`
 color: ${Theme.fontColor.primary};
 font-size:20px;
`;



export const TrocarSenha = styled.a`
  position: absolute;
  margin-top: 45px;
  margin-left: 290px;
  color: #9fa2b4;
  cursor: pointer;
`;


export const ContainerForm = styled.form`
  width: 380px;
  display: grid;
  background-color: #fff;
  border: 1.5px solid #dfe0eb;
  align-items: center;
  justify-content: center;
  box-shadow: ${Theme.shadow.container};
  color: #9fa2b4;
  border-radius: 10px;
`;
export const Error = styled.small`
  margin-top: 5px;
  width: 316px;
  margin-bottom: 10px;
  display: flex;
  
  font-weight: bold;
  color: red;
`;
export const Input = styled.input`
  padding-left: 10px;
  font-size: 18px;
  width: 316px;
  height: 42px;
  margin-top: 6px;
  border-radius: 8px;
  border: 2px solid #f0f1f7;
  color: #8d8d8d;
  outline: none;
  &::placeholder {
    color: #9fa2b4;
  }
  &:focus {
    border: 2px solid #9fa2b4;
  }
`;

export const Botao = styled.button`
  border: 1px solid ${Theme.color.primary};
  background-color: transparent;
  padding: 12px 0;
  margin-bottom:40px;
  width: 100%;
  border-radius: 10px;
  color: ${Theme.color.primary};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: white;
    border: 1px solid white;
    background-color: ${Theme.color.primary};
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Subtitulo = styled.h3`
  color: #252733;
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 12px;
`;

export const Paragrafo = styled.p`
  color: #9fa2b4;
  letter-spacing: 0.3;
  font-size: 14px;
  text-align: center;
`;

export const DivCadastrar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const SubCadastrar = styled.h2`
  font-size: 14px;
`;

export const SignUp = styled.span`
  cursor: pointer;
  color: #3751ff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;
