import InputMask from "react-input-mask";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import { Values } from "../../model/CandidatoDTO";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import * as C from "./curriculo.styles";
import Notiflix from "notiflix";
import { prepareDataToInsert , SingupSchema } from "../../utils";
import Loading from "../../components/loading/Loading";
import { PrepareDataFromGet } from "../../utils";
function FormCurriculo() {
  const { idCandidato } = useParams();
  const navigate = useNavigate()
  const [trabalhandoAtualmente, setTrabalhandoAtualmente] = useState(false);
  const [candidatoForUpdate, setCandidatoForUpdate] = useState<any>();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      api.defaults.headers.common['Authorization'] = token
    }
    if (idCandidato) {
      getInCandidatoById(idCandidato);
    }
  }, []);

  async function postCandidato(values: Values) {
    const newValues = prepareDataToInsert(values);
    try {
      const { data } = await api.post("/candidato-completo", newValues);
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
      const { data } = await api.get(`/candidato-completo/get-paginado?id-candidato=${idCandidato}`);
      const {candidatosCompletos} = data
      candidatosCompletos.map((props:any)=>(
        setCandidatoForUpdate(props)
      ))

    } catch (error) {
      console.log(error);
    }
  }

  function desabledInput() {
    trabalhandoAtualmente
      ? setTrabalhandoAtualmente(false)
      : setTrabalhandoAtualmente(true);
  }

  async function updateCandidato(values: Values) {
    const newValues = prepareDataToInsert(values);
    try{
      const {data} = await api.put(`/candidato-completo?id-candidato=${idCandidato}` , newValues)
      console.log(data);
      Notiflix.Notify.success("Candidato atualizado com sucesso");
      navigate('/curriculos')
    }
    catch(error){
      console.log(error);
    }
    
  }

 

  //Quando Adicionar o put adicionar ! no candidatoForUpdate
  if (idCandidato && !candidatoForUpdate) {
    return <Loading />;
  }  
    return (
    <C.ContainerGeral>
      <C.TitleForm>
        {idCandidato ? "Atualizar" : "Adicionar"} Candidato
      </C.TitleForm>
      <Formik
        initialValues={
          
          idCandidato
            ? {
              ...PrepareDataFromGet(candidatoForUpdate)
            }
            : {
                nome: "",
                cpf: "",
                dataNascimento: "",
                logradouro: "",
                cidade: "",
                bairro: "",
                telefone: "",
                numero: 0,
                instituicao: "",
                senioridade: "",
                descricaoDoCurso: "",
                dataInicioCurso: "",
                dataFimCurso: "",
                nomeEmpresa: "",
                cargo: "",
                descricaoDoCargo: "",
                dataInicioExperiencia: "",
                trabalhandoAtualmente: false,
                dataFimExperiencia: "",
              }
        }
        validationSchema={SingupSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          {
            idCandidato ? updateCandidato(values) : postCandidato(values);
          }
        }}
      >
        {({ errors, touched }) => (
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
            <C.ContainerInputs>
              <C.TitleInfoTopic>Dados Academicos</C.TitleInfoTopic>
              <C.DivFlexColumn>
                <C.Label htmlFor="instituicao">instituicao</C.Label>
                <Field
                  id="instituicao"
                  name="instituicao"
                  placeholder="Exemplo: Faculdade DBC"
                />
                {errors.instituicao && touched.instituicao ? (
                  <C.DivError>{errors.instituicao}</C.DivError>
                ) : null}
              </C.DivFlexColumn>

              <C.DivFlexColumn>
                <C.Label htmlFor="descricaoDoCurso">Nome do curso</C.Label>
                <Field
                  id="descricaoDoCurso"
                  name="descricaoDoCurso"
                  placeholder="Exemplo: Informática"
                />
                {errors.descricaoDoCurso && touched.descricaoDoCurso ? (
                  <C.DivError>{errors.descricaoDoCurso}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="dataInicioCurso">Data de início</C.Label>
                <Field
                  id="dataInicioCurso"
                  name="dataInicioCurso"
                  as={InputMask}
                  mask="99/99/9999"
                />
                {errors.dataInicioCurso && touched.dataInicioCurso ? (
                  <C.DivError>{errors.dataInicioCurso}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="dataFimCurso">Data de conclusão</C.Label>
                <Field
                  id="dataFimCurso"
                  name="dataFimCurso"
                  as={InputMask}
                  mask="99/99/9999"
                />
                {errors.dataFimCurso && touched.dataFimCurso ? (
                  <C.DivError>{errors.dataFimCurso}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
            </C.ContainerInputs>
            <C.ContainerInputs>
              <C.TitleInfoTopic>
                Última Experiência Profissional
              </C.TitleInfoTopic>
              <C.DivFlexColumn>
                <C.Label htmlFor="nomeEmpresa">Nome da empresa</C.Label>
                <Field
                  id="nomeEmpresa"
                  name="nomeEmpresa"
                  placeholder="Exemplo: DBC Company"
                />
                {errors.nomeEmpresa && touched.nomeEmpresa ? (
                  <C.DivError>{errors.nomeEmpresa}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="cargo">Último Cargo</C.Label>
                <Field id="cargo" name="cargo" placeholder="cargo" />
                {errors.cargo && touched.cargo ? (
                  <C.DivError>{errors.cargo}</C.DivError>
                ) : null}
              </C.DivFlexColumn>
              <C.DivFlexColumn>
                <C.Label htmlFor="descricaoDoCargo">Descrição do cargo</C.Label>
                <Field
                  id="descricaoDoCargo"
                  name="descricaoDoCargo"
                  placeholder="Exemplo: Responsável pela loja"
                />
                {errors.descricaoDoCargo && touched.descricaoDoCargo ? (
                  <C.DivError>{errors.descricaoDoCargo}</C.DivError>
                ) : null}
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
                <C.Label htmlFor="dataInicioExperiencia">
                  Data de início
                </C.Label>
                <Field
                  id="dataInicioExperiencia"
                  name="dataInicioExperiencia"
                  placeholder="Exemplo: 01/01/2000"
                  as={InputMask}
                  mask="99/99/9999"
                />
                {errors.dataInicioExperiencia &&
                touched.dataInicioExperiencia ? (
                  <C.DivError>{errors.dataInicioExperiencia}</C.DivError>
                ) : null}
              </C.DivFlexColumn>

              <C.DivFlexColumn>
                <C.Label htmlFor="dataFimExperiencia">Data de saída</C.Label>
                <Field
                  disabled={trabalhandoAtualmente}
                  id="dataFimExperiencia"
                  name="dataFimExperiencia"
                  mask="99/99/9999"
                  as={InputMask}
                />
              </C.DivFlexColumn>
              <C.DivRowFlex>
                <C.Label htmlFor="trabalhandoAtualmente">
                  Trabalho Atual?
                </C.Label>
                <C.CheckBox
                  onClick={() => desabledInput()}
                  id="trabalhandoAtualmente"
                  name="trabalhandoAtualmente"
                  type="checkbox"
                />
                {errors.trabalhandoAtualmente &&
                touched.trabalhandoAtualmente ? (
                  <C.DivError>{errors.trabalhandoAtualmente}</C.DivError>
                ) : null}
              </C.DivRowFlex>
            </C.ContainerInputs>
            {idCandidato ? (
              <C.Botao type="submit">Atualizar</C.Botao>
            ) : (
              <C.Botao type="submit">Adicionar</C.Botao>
            )}
          </Form>
        )}
      </Formik>
    </C.ContainerGeral>
  );
}

export default FormCurriculo;
