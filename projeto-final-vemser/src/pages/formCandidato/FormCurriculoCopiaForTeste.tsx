import InputMask from "react-input-mask";
import { Formik, Field, Form, FieldArray ,getIn } from "formik";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "./FormCurriculo.styles";
import Notiflix from "notiflix";
import * as Yup from 'yup'
import api from "../../api";
import { CandidatoDTO } from "../../model/CandidatoDTO";
import { ButtonVisualizar } from "../../components/globalStyles/global.styles";
import {
  SingupSchema,
  prepareDataToInsert,
  prepareDateToUser,
} from "../../utils";
import Loading from "../../components/loading/Loading";
function FormCurriculoCopiaTestes() {
  const { idCandidato } = useParams();
  const [limitExperiencia, setLimitExperiencia] = useState(0);
  const [limitAcademico, setLimitAcademico] = useState(0);
  const navigate = useNavigate();
  /* const [trabalhandoAtualmente, setTrabalhandoAtualmente] = useState(false); */
  const [candidatoForUpdate, setCandidatoForUpdate] = useState<any>();
  /*  const [modalStatus, setModalStatus] = useState(false); */

  const [fileInputData, setFileInputData] = useState<any>();

  /* const [indexExperbiencias, setIndexExperiencias] = useState(); */
  const [Link, setLink] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
    if (idCandidato) {
      getInCandidatoById(idCandidato);
    }
  }, []);
console.log(idCandidato);

  async function postCandidato(values: any) {
    console.log('post');
    try {
      const { data } = await api.post("/candidato-completo", values);
      console.log(data);
      {
        data && PostIn(data.idCandidato);
      }
      Notiflix.Notify.success("Candidato Cadastrado com sucesso");
      navigate("/curriculos");
    } catch (error) {
      console.log(error);
    }
  }

  async function PostIn(idCandidatoPost: number) {
    console.log(idCandidatoPost);
    const formData = new FormData();
    formData.append("curriculo", fileInputData);
    try {
      const { data } = await api.post(
        `/curriculo/upload-curriculo/${idCandidatoPost}`,
        formData
      );
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
      candidatosCompletos.map((props: CandidatoDTO) =>
        setCandidatoForUpdate(prepareDateToUser(props))
      );
      console.log(candidatoForUpdate);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCandidato(values: CandidatoDTO) {
    console.log('ATUALIZAR');
    
    prepareDataToInsert(values);
    try {
      const { data } = await api.put(
        `/candidato-completo?id-candidato=${idCandidato}`,
        values
      );
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
  if (!Link) {
    <Loading />;
  }

  function addExp() {
    setLimitExperiencia(limitExperiencia + 1);
  }
  function removeExp(index: string, remove: Function) {
    remove(index);
    setLimitExperiencia(limitExperiencia - 1);
  }
  function addAcad() {
    setLimitAcademico(limitAcademico + 1);
  }
  function removeAcad(index: string, remove: Function) {
    remove(index);
    setLimitAcademico(limitAcademico - 1);
  }

  const initialValues = {

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
        initialValues={idCandidato ? candidatoForUpdate : initialValues}
        onSubmit={async (values: CandidatoDTO) => {
          idCandidato ? updateCandidato(values) : postCandidato(values);
        }}
      >
        {({ values, errors, touched }: any) => (
          
          <Form>
            <FieldArray name="dadosEscolares">
              {({ insert, remove, push }) => (
                <div>
                  {values.dadosEscolares.length > 0 &&
                    values.dadosEscolares.map(
                      (dadosEscolares: any, index: any) => (
                        <C.ContainerInputs className="row" key={index}>
                          <C.DivCabeçalho>
                            <C.TitleInfoTopic>{`Informação Academica ${
                              index + 1
                            }`}</C.TitleInfoTopic>
                            <C.ButtonExcluir
                              type="button"
                              className="secondary"
                              onClick={() => removeAcad(index, remove)}
                            >
                              <AiOutlineClose />
                            </C.ButtonExcluir>
                          </C.DivCabeçalho>
                          <C.DivFlexColumn>
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
                          { typeof errors.friends === 'string' ? <div>{errors.friends}</div> : null}
                          </C.DivFlexColumn>
                          <C.DivFlexColumn>
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
                          <C.DivFlexColumn>
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
                          <C.DivFlexColumn>
                            <C.Label
                              htmlFor={`dadosEscolares.${index}.dataFim`}
                            >
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

                          <C.DivFlexColumn></C.DivFlexColumn>
                        </C.ContainerInputs>
                      )
                    )}
                  {limitAcademico < 10 && (
                    <a onClick={() => addAcad()}>
                      <C.DivFlexColumn>
                        <ButtonVisualizar
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
                        </ButtonVisualizar>
                      </C.DivFlexColumn>
                    </a>
                  )}
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
                          <C.TitleInfoTopic>
                            {`Experiência ${index + 1}`}{" "}
                          </C.TitleInfoTopic>
                          <C.ButtonExcluir
                            type="button"
                            className="secondary"
                            onClick={() => removeExp(index, remove)}
                          >
                            <AiOutlineClose />
                          </C.ButtonExcluir>
                        </C.DivCabeçalho>
                        <C.DivFlexColumn>
                          <C.Label
                            htmlFor={`experiencias.${index}.nomeEmpresa`}
                          >
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
                        <C.DivFlexColumn>
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
                        <C.DivFlexColumn>
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
                        <C.DivFlexColumn>
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

                        <C.DivFlexColumn></C.DivFlexColumn>
                      </C.ContainerInputs>
                    ))}
                  {limitExperiencia < 10 && (
                    <a onClick={() => addExp()}>
                      <C.DivFlexColumn>
                        <ButtonVisualizar
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
                        </ButtonVisualizar>
                      </C.DivFlexColumn>
                    </a>
                  )}
                </div>
              )}
            </FieldArray>
            <C.Botao type="submit">
              {idCandidato ? "Atualizar" : "Adicionar"}
            </C.Botao>
          </Form>
        )}
      </Formik>
    </C.ContainerGeral>
  );
}

export default FormCurriculoCopiaTestes;
