import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import Notiflix from "notiflix";
import api from "../../api";
import * as C from "./CadastrarUsuario.styles"
import { CreateUserDTO } from "../../model/CreateUser.DTO";
const Login = () => {
  
  const [pass, setPass] = useState(true);
  const navigate = useNavigate();

  async function CreateUser(values:CreateUserDTO){
    console.log(values);
    try{
      const {data} =  await api.post('/user/create-cadastrador?cargo=CADASTRADOR' , values )
      Notiflix.Notify.success('Usuario Cadastrado');
      navigate('/')
    }
    catch(error){
      console.log(error);
    }

    
  }

  const formikProps = useFormik({
    initialValues: {
            nome: "",
            email: "",
            senha: ""
    },
    validationSchema: Yup.object().shape({
        nome: Yup.string()
        .required("Preencha o campo de nome!")
        .min(2 ,'Mínimo 2 dígitos'),
        email: Yup.string()
        .email('E-mail inválido')
        .required("Preencha o campo de email!"),

        senha: 
        Yup.string()
        .required("Preencha o campo de senha!")
        .min(8 ,'Mínimo 8 dígitos')
        .max(32 ,'Máximo 32 dígitos')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              'uma letra maiúscula e uma letra minúscula, ' +
              'um número e um caracter especial'
      )
      }),
    onSubmit: async (
      values: CreateUserDTO,
      { setSubmitting }: FormikHelpers<CreateUserDTO>
    ) => {
      CreateUser(formikProps.values);
    },
  });

  return (
    <C.ContainerUser>
      <C.ContainerForm onSubmit={formikProps.handleSubmit}>
        <C.DivLogo>
          <C.TitleLogin>Login VemCV</C.TitleLogin>
        </C.DivLogo>
        <C.DivForm>
          <C.Label  htmlFor="nome">Nome</C.Label >
          <C.Input
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
            value={formikProps.values.nome}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.nome && formikProps.touched.nome ? (
            <C.Error>{formikProps.errors.nome}</C.Error>
          ) : null}
        </C.DivForm>
        <C.DivForm>
          <C.Label  htmlFor="email">Email</C.Label >
          <C.Input
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={formikProps.values.email}
            onChange={formikProps.handleChange}
          />
          {formikProps.errors.email && formikProps.touched.email ? (
            <C.Error>{formikProps.errors.email}</C.Error>
          ) : null}
        </C.DivForm>
        <C.DivForm>
          <C.Label htmlFor="senha">Senha</C.Label >
          <C.Input
            type={pass ? "password" : "text"}
            name="senha"
            id="senha"
            placeholder="Digite sua senha"
            value={formikProps.values.senha}
            onChange={formikProps.handleChange}
          />
           <C.TrocarSenha onClick={() => setPass(!pass)}>
            {pass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </C.TrocarSenha>
          {formikProps.errors.senha && formikProps.touched.senha ? (
            <C.Error>{formikProps.errors.senha}</C.Error>
          ) : null}
             <div>
              <C.Botao type="submit">Cadastrar</C.Botao>
             </div>
        </C.DivForm>
            
      </C.ContainerForm>
    </C.ContainerUser>
  );
};

export default Login;
