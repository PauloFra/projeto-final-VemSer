import InputMask from "react-input-mask";
import { Formik, Field, Form, FormikHelpers ,FieldArray , ErrorMessage} from "formik";
import { useEffect, useState } from "react";

// import Experiencias from "../../components/experienciasForm/Experiencias";

import { Values } from "../../model/CandidatoDTO";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import * as C from "./curriculo.styles";
import Notiflix from "notiflix";
import {  SingupSchema , formatDateToApi } from "../../utils";
import Loading from "../../components/loading/Loading";
import { PrepareDataFromGet } from "../../utils";
import ExperienciaCandidato from "./experiencia/ExperienciaCandidato";
import Modal from "./experiencia/Modal";
function FormCurriculo() {

  const { idCandidato } = useParams();
  
  
  
  const navigate = useNavigate();
  const [trabalhandoAtualmente, setTrabalhandoAtualmente] = useState(false);
  const [candidatoForUpdate, setCandidatoForUpdate] = useState<any>();
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
    if (idCandidato) {
      getInCandidatoById(idCandidato);
    }
  }, []);

  async function postCandidato(values: any) {
    
    values.dataNascimento = formatDateToApi(values.dataNascimento)
    console.log(values);
    
    
    try {
      const { data } = await api.post("/candidato-completo", values );
      console.log(data);
      Notiflix.Notify.success("Candidato Cadastrado com sucesso");
      setTimeout(() => {
        document.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  async function getInCandidatoById(idCandidato: string) {

    try {
      const { data } = await api.get(
        `/candidato-completo/get-paginado?id-candidato=${idCandidato}`
      );
      
      const { candidatosCompletos } = data;
      candidatosCompletos.map((props: any) => setCandidatoForUpdate(props));
    } catch (error) {
      console.log(error);
    }
  }

  function desabledInput() {
    trabalhandoAtualmente
      ? setTrabalhandoAtualmente(false)
      : setTrabalhandoAtualmente(true);
  }

  async function updateCandidato(values: any) {
    console.log('FORMIK =>', values);  
    // const newValues = prepareDataToInsert(values);
    // try {
    //   const { data } = await api.put(
    //     `/candidato-completo?id-candidato=${idCandidato}`,
    //     newValues
    //   );
    //   console.log(data);
    //   Notiflix.Notify.success("Candidato atualizado com sucesso");
    //   navigate("/curriculos");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  //Quando Adicionar o put adicionar ! no candidatoForUpdate
  if (idCandidato && !candidatoForUpdate) {
    return <Loading />;
  }
  
  console.log('idCandidato =>' , idCandidato);


  console.log('candidatoForUpdate =>' , candidatoForUpdate);
  
  
  const initialValues =
    {
    nome: "TESTE AQUI PARA ADICIONAR",
    cpf: "",
    dataNascimento: "",
    telefone: "",
    logradouro: "",
    numero: 0,
    
    cargo: "",
    senioridade: "string",
    experiencias: [],
    cidade: "",
    bairro: "",
    }
   
  

  return (
    <C.ContainerGeral>

      <C.TitleForm>
        {idCandidato ? "Atualizar" : "Adicionar"} Candidato
      </C.TitleForm>
    <Formik
    
      validationSchema={SingupSchema}
      initialValues={ idCandidato ?  candidatoForUpdate : initialValues }
      onSubmit={async (values:any) => {
          idCandidato ? updateCandidato(values) : postCandidato(values);
        }}
    >
      {({ values, errors, touched  }:any) => (
        <Form>
          <C.ContainerInputs>
              <C.TitleInfoTopic>Dados Pessoais</C.TitleInfoTopic>
              <C.DivFlexColumn>
                <C.Label htmlFor="nome">nome</C.Label>
                <Field id="nome" name="nome" placeholder="nome" />
                {errors.nome && touched.nome ? (
                  <C.DivError>{errors.nome}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="cpf">Cpf</C.Label>
                <Field
                  id="cpf"
                  name="cpf"
                  placeholder="CPF"
                  as={InputMask}
                  mask="999.999.999-99"
                />
                {errors.cpf && touched.cpf ? (
                  <C.DivError>{errors.cpf}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="cargo">Cargo</C.Label>
                <Field id="cargo" name="cargo" placeholder="cargo" />
                {/* {errors.cargo && touched.cargo ? (
                  <C.DivError>{errors.cargo}</C.DivError>
                ) : null} */}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="senioridade">Senioridade</C.Label>
                <Field
                  id="senioridade"
                  name="senioridade"
                  placeholder="Exemplo: Desenvolvedor Júnior"
                />
                {errors.senioridade && touched.senioridade ? (
                  <C.DivError>{errors.senioridade}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="telefone">telefone</C.Label>
                <Field id="telefone" name="telefone" placeholder="telefone" />
                {errors.telefone && touched.telefone ? (
                  <C.DivError>{errors.telefone}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="dataNascimento">Data de Nascimento</C.Label>
                <Field
                  id="dataNascimento"
                  name="dataNascimento"
                  placeholder="dataNascimento"
                  as={InputMask}
                  mask="99/99/9999"
                />
                {errors.dataNascimento && touched.dataNascimento ? (
                  <C.DivError>{errors.dataNascimento}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
            </C.ContainerInputs>
            <C.ContainerInputs>
              <C.TitleInfoTopic>Endereço</C.TitleInfoTopic>
              <C.DivFlexColumn>
                <C.Label htmlFor="logradouro">logradouro</C.Label>
                <Field
                  id="logradouro"
                  name="logradouro"
                  placeholder="logradouro"
                  type="text"
                />
                {errors.logradouro && touched.logradouro ? (
                  <C.DivError>{errors.logradouro}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="cidade">cidade</C.Label>
                <Field id="cidade" name="cidade" placeholder="cidade" />

                {errors.cidade && touched.cidade ? (
                  <C.DivError>{errors.cidade}</C.DivError>
                ) : null}

              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="bairro">bairro</C.Label>
                <Field id="bairro" name="bairro" placeholder="bairro" />

                {errors.bairro && touched.bairro ? (
                  <C.DivError>{errors.bairro}</C.DivError>
                ) : null}

              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="numero">numero</C.Label>
                <Field
                  id="numero"
                  name="numero"
                  type="number"
                  placeholder="numero"
                />
                {errors.numero && touched.numero ? (
                  <C.DivError>{errors.numero}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
            </C.ContainerInputs>
    

          <FieldArray name="experiencias">
            {({ insert, remove, push }) => (
              <div>
                {values.experiencias.length > 0 &&
                  values.experiencias.map((experiencias:any, index:any) => (
                    <div className="row" key={index}>
                      <h1>{`${index+1}º experiencia`}</h1>
                      <div className="col">
                        <label htmlFor={`experiencias.${index}.nomeEmpresa`}>nomeEmpresa</label>
                        <Field
                          name={`experiencias.${index}.nomeEmpresa`}
                          placeholder="nomeEmpresa"
                          type="text"
                        />
                        {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                      </div>
                      <div className="col">
                        <label htmlFor={`experiencias.${index}.descricao`}>descricao</label>
                        <Field
                          name={`experiencias.${index}.descricao`}
                          placeholder="descricao"
                          type="text"
                        />

                        {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                      </div>
                      <div className="col">
                        <label htmlFor={`experiencias.${index}.dataInicio`}>dataInicio</label>
                        <Field
                          name={`experiencias.${index}.dataInicio`}
                          placeholder="dataInicio"
                          type="text"
                        />

                        {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                      </div>
                      <div className="col">
                        <label htmlFor={`experiencias.${index}.dataFim`}>dataFim</label>
                        <Field
                          name={`experiencias.${index}.dataFim`}
                          placeholder="dataFim"
                          type="text"
                        />

                        {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                      </div>

                      <div className="col">

                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({  
                    dataFim: "",
                    dataInicio: "",
                    descricao: "",
                    nomeEmpresa: ""
                  })}
                >
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Invite</button>
        </Form>
      )}
    </Formik>
    </C.ContainerGeral>
  );
}

export default FormCurriculo;
