import styled from "styled-components";

export const ContainerLogin = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #a6aec1;

  /*  background: rgb(166, 174, 193);
  background: linear-gradient(
    183deg,
    rgba(166, 174, 193, 1) 0%,
    rgba(207, 213, 225, 1) 100%
  ); */
  justify-content: center;
  align-items: center;
`;

export const DivLogo = styled.div`
  margin: 15px 0px 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleLogin = styled.h1`
  font-size: 24px;
  color: #6c788e;
  opacity: 0.7;
`;

export const DivForm = styled.div`
  display: grid;
  margin-bottom: 76px;
  position: relative;
  height: 67.7px;
`;

export const ContainerForm = styled.form`
  width: 380px;
  height: 482px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: #9fa2b4;
  border-radius: 8px;
`;
export const Error = styled.small`
  margin-top: 5px;
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
  width: 316px;
  height: 48px;
  font-size: 18px;
  color: #fff;
  background-color: #6c788e;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  cursor: pointer;
  :hover {
    background-color: rgb(108, 120, 142, 0.9);
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

export const TrocarSenha = styled.a`
  position: absolute;
  right: 10px;
  bottom: 8px;
  color: #9fa2b4;
  cursor: pointer;
`;
