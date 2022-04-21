import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import * as C from "./Login.styles";
import { loginDTO } from "../../model/LoginDTO";
import AuthJson from "../../Auth.json";
const Login = () => {
  const { email, senha } = AuthJson.auth;
  const { setIsLogged } = useContext<any>(AuthContext);

  const [pass, setPass] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      navigate("/");
    }
  }, []);
  const AuthFunction = (formikProps: loginDTO) => {
    if (formikProps.email === email && formikProps.senha === senha) {
      setIsLogged(true);
      navigate("/");
    }
  };
  const formikProps = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Preencha o campo de email!"),
      senha: Yup.string().required("Preencha o campo de senha!"),
    }),
    onSubmit: async (
      values: loginDTO,
      { setSubmitting }: FormikHelpers<loginDTO>
    ) => {
      AuthFunction(formikProps.values);
      /* handleLogin(formikProps.values); */
      setSubmitting(false);
    },
  });

  return (
    <div>
      <C.ContainerLogin>
        <C.ContainerForm onSubmit={formikProps.handleSubmit}>
          <C.DivLogo>
            <C.TitleLogin>Login VemCV</C.TitleLogin>
          </C.DivLogo>
          <C.DivForm>
            <label htmlFor="email">Email</label>
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
            <label htmlFor="senha">Senha</label>
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
          </C.DivForm>
          <C.Botao type="submit">Login</C.Botao>
        </C.ContainerForm>
      </C.ContainerLogin>
    </div>
  );
};

export default Login;
