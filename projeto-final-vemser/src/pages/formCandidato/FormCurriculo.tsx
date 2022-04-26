import InputMask from "react-input-mask";
import {
  Formik,
  Field,
  Form,
  FormikHelpers,
  FieldArray,
  ErrorMessage,
} from "formik";
import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'

// import Experiencias from "../../components/experienciasForm/Experiencias";
import { ExperienciaDTO } from "../../model/ExperienciaDTO";
import { CandidatoDTO } from "../../model/CandidatoDTO";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import * as C from "./curriculo.styles";
import Notiflix from "notiflix";
import { SingupSchema, prepareDataToInsert ,prepareDateToUser} from "../../utils";
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

  async function postCandidato(values: CandidatoDTO) {
    prepareDataToInsert(values);
    try {
      const { data } = await api.post("/candidato-completo", values);
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
      const { data } = await api.get( `/candidato-completo/get-paginado?id-candidato=${idCandidato}`);

      const { candidatosCompletos } = data;
      candidatosCompletos.map((props: CandidatoDTO) =>
        setCandidatoForUpdate(prepareDateToUser(props))
      );
      console.log(candidatoForUpdate);
    } catch (error) {
      console.log(error);
    }
  }

  function desabledInput() {
    trabalhandoAtualmente
      ? setTrabalhandoAtualmente(false)
      : setTrabalhandoAtualmente(true);
  }

  async function updateCandidato(values: CandidatoDTO) {
 
    prepareDataToInsert(values);
    try {
      const { data } = await api.put(`/candidato-completo?id-candidato=${idCandidato}` , values);
      console.log(data);
      Notiflix.Notify.success("Candidato atualizado com sucesso");
      navigate("/curriculos");
    } catch (error) {
      console.log(error);
    }
  }

  if (idCandidato && !candidatoForUpdate) {
    return <Loading />;
  }

  console.log("idCandidato =>", idCandidato);

  console.log("candidatoForUpdate FFFF =>" );

  const initialValues = {
    nome: "",
    cpf: "",
    dataNascimento: "",
    telefone: "",
    logradouro: "",
    numero: 0,
    cargo: "",
    senioridade: "",
    experiencias: [],
    dadosEscolares: [],
    cidade: "",
    bairro: "",
  };

  return (
    <C.ContainerGeral>
      <C.TitleForm>
        {idCandidato ? "Atualizar" : "Adicionar"} Candidato
      </C.TitleForm>
      <Formik
        validationSchema={SingupSchema}
        initialValues={idCandidato ? candidatoForUpdate : initialValues}
        onSubmit={async (values: CandidatoDTO) => {
          idCandidato ? updateCandidato(values) : postCandidato(values);
        }}
      >
        {({ values, errors, touched }: any) => (
          <Form>
            <C.ContainerInputs>
              <C.TitleInfoTopic>Dados Pessoais</C.TitleInfoTopic>
              <C.DivFlexColumn>
                <C.Label htmlFor="nome">nome</C.Label>
                <Field id="nome" name="nome" placeholder="Nome" />
                {errors.nome && touched.nome ? (
                  <C.DivError>{errors.nome}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="cpf">CPF</C.Label>
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
                <Field id="cargo" name="cargo" placeholder="Cargo" />
                {errors.cargo && touched.cargo ? (
                  <C.DivError>{errors.cargo}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="senioridade">Senioridade</C.Label>
                <Field
                  id="senioridade"
                  name="senioridade"
                  placeholder="Senioridade"
                />
                {errors.senioridade && touched.senioridade ? (
                  <C.DivError>{errors.senioridade}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              
              <C.DivFlexColumn>
                <C.Label htmlFor="telefone">telefone</C.Label>
                <Field id="telefone" name="telefone" placeholder="Telefone" />
                {errors.telefone && touched.telefone ? (
                  <C.DivError>{errors.telefone}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              
              <C.DivFlexColumn>
                <C.Label htmlFor="dataNascimento">Data de Nascimento</C.Label>
                <Field
                  id="dataNascimento"
                  name="dataNascimento"
                  placeholder="Data de Nascimento"
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
                <C.Label htmlFor="logradouro">Logradouro</C.Label>
                <Field
                  id="logradouro"
                  name="logradouro"
                  placeholder="Logradouro"
                  type="text"
                />
                {errors.logradouro && touched.logradouro ? (
                  <C.DivError>{errors.logradouro}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="cidade">Cidade</C.Label>
                <Field id="cidade" name="cidade" placeholder="Cidade" />

                {errors.cidade && touched.cidade ? (
                  <C.DivError>{errors.cidade}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="bairro">Bairro</C.Label>
                <Field id="bairro" name="bairro" placeholder="Bairro" />

                {errors.bairro && touched.bairro ? (
                  <C.DivError>{errors.bairro}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="numero">Número</C.Label>
                <Field
                  id="numero"
                  name="numero"
                  type="number"
                  placeholder="Número"
                />
                {errors.numero && touched.numero ? (
                  <C.DivError>{errors.numero}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
            </C.ContainerInputs>

            <FieldArray name="dadosEscolares">
              {({ insert, remove, push }) => (
                <div>
                  {values.dadosEscolares.length > 0 &&
                    values.dadosEscolares.map(
                      (dadosEscolares: any, index: any) => (
                        <C.ContainerInputs className="row" key={index}>
                          <C.DivCabeçalho>
                            <C.TitleInfoTopic>{`Informação Academica ${index + 1}`}</C.TitleInfoTopic>
                            <C.ButtonExcluir
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              <AiOutlineClose />
                            </C.ButtonExcluir>
                          </C.DivCabeçalho>
                          <C.DivFlexColumn >
                            <C.Label
                              htmlFor={`dadosEscolares.${index}.descricao`}
                            >
                              Descrição Do Curso
                            </C.Label>
                            <Field
                              name={`dadosEscolares.${index}.descricao`}
                              placeholder="Descrição Do Curso"
                              type="text"
                            />
                            {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                          </C.DivFlexColumn>
                          <C.DivFlexColumn >
                            <C.Label
                              htmlFor={`dadosEscolares.${index}.instituicao`}
                            >
                              Instituição
                            </C.Label>
                            <Field
                              name={`dadosEscolares.${index}.instituicao`}
                              placeholder="Instituição"
                              type="text"
                            />

                            {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                          </C.DivFlexColumn>
                          <C.DivFlexColumn >
                            <C.Label
                              htmlFor={`dadosEscolares.${index}.dataInicio`}
                            >
                              Data De Início
                            </C.Label>
                            <Field
                              name={`dadosEscolares.${index}.dataInicio`}
                              placeholder="Data De Início"
                              type="text"
                              as={InputMask}
                              mask="99/99/9999"
                            />

                            {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                          </C.DivFlexColumn>
                          <C.DivFlexColumn >
                            <C.Label htmlFor={`dadosEscolares.${index}.dataFim`}>
                              Data Final
                            </C.Label>
                            <Field
                              name={`dadosEscolares.${index}.dataFim`}
                              placeholder="Data Final"
                              type="text"
                              as={InputMask}
                              mask="99/99/9999"
                            />

                            {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                          </C.DivFlexColumn>

                          <C.DivFlexColumn >
                           
                          </C.DivFlexColumn>
                        </C.ContainerInputs>
                      )
                    )}

                  <C.DivFlexColumn>
                    <C.ButtonAdd
                      type="button"
                      className="secondary"
                      onClick={() =>
                        push({
                          dataFim: "",
                          dataInicio: "",
                          descricao: "",
                          instituicao: "",
                        })
                      }
                    >
                      Nova Informação Acadêmica
                    </C.ButtonAdd>
                  </C.DivFlexColumn>
                </div>
              )}
            </FieldArray>

            <FieldArray name="experiencias">
              {({ insert, remove, push }) => (
                <div>
                  {values.experiencias.length > 0 &&
                    values.experiencias.map((experiencias: any, index: any) => (
                      <C.ContainerInputs className="row" key={index}>
                        <C.DivCabeçalho>
                          <C.TitleInfoTopic>{`Experiência ${index + 1}`} </C.TitleInfoTopic>
                          <C.ButtonExcluir
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            <AiOutlineClose />
                          </C.ButtonExcluir>
                        </C.DivCabeçalho>
                        <C.DivFlexColumn >
                          <C.Label htmlFor={`experiencias.${index}.nomeEmpresa`}>
                            Nome Da Empresa
                          </C.Label>
                          <Field
                            name={`experiencias.${index}.nomeEmpresa`}
                            placeholder="Nome Da Empresa"
                            type="text"
                          />
                          {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                        </C.DivFlexColumn>
                        <C.DivFlexColumn >
                          <C.Label htmlFor={`experiencias.${index}.descricao`}>
                            Descrição
                          </C.Label>
                          <Field
                            name={`experiencias.${index}.descricao`}
                            placeholder="Descrição"
                            type="text"
                          />

                          {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                        </C.DivFlexColumn>
                        <C.DivFlexColumn >
                          <C.Label htmlFor={`experiencias.${index}.dataInicio`}>
                            Data De Inicio
                          </C.Label>
                          <Field
                            name={`experiencias.${index}.dataInicio`}
                            placeholder="Data De Inicio"
                            type="text"
                            as={InputMask}
                            mask="99/99/9999"
                          />

                          {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                        </C.DivFlexColumn>
                        <C.DivFlexColumn >
                          <C.Label htmlFor={`experiencias.${index}.dataFim`}>
                            Data Final
                          </C.Label>
                          <Field
                            name={`experiencias.${index}.dataFim`}
                            placeholder="Data Final"
                            type="text"
                            as={InputMask}
                            mask="99/99/9999"
                          />

                          {/* <ErrorMessage
                          name={`experiencias.${index}.name`}
                          component="div"
                          className="field-error"
                        /> */}
                        </C.DivFlexColumn>

                        <C.DivFlexColumn >
                          
                        </C.DivFlexColumn>
                      </C.ContainerInputs>
                    ))}

                  <C.DivFlexColumn>
                    <C.ButtonAdd
                      type="button"
                      className="secondary"
                      onClick={() =>
                        push({
                          dataFim: "",
                          dataInicio: "",
                          descricao: "",
                          nomeEmpresa: "",
                        })
                      }
                    >
                      Nova Experiência
                    </C.ButtonAdd>
                  </C.DivFlexColumn>
                </div>
              )}
            </FieldArray>
            <C.Botao type="submit">
              {idCandidato?'Atualizar':'Enviar'}
            </C.Botao>
          </Form>
        )}
      </Formik>
    </C.ContainerGeral>
  );
}

export default FormCurriculo;
