import InputMask from 'react-input-mask';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Option from '../../components/select/Option';
import escolaridadeOpt from '../../escolaridadeOpt.json';
import Experiencias from '../../components/experienciasForm/Experiencias'
import { useEffect, useState } from 'react';
import { Values } from '../../model/CandidatoDTO';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../api';
import * as C from "./curriculo.styles";


import styles from './form.module.css'

import Loading from '../../components/loading/Loading';

function FormCurriculo() {
  const {idCandidato} = useParams()
  const [trabalhandoAtualmente , setTrabalhandoAtualmente] = useState(false)

  const [candidatoForUpdate , setCandidatoForUpdate] = useState<any>()

  useEffect(()=>{
    if(idCandidato){
      getInCandidatoById(idCandidato)
    }
  },[])

  async function postCandidato(values:Values){
   try{
    const {data} = await api.post('candidato/candidato-completo' , values)
    console.log(data);
    
   }
   catch(error){
     console.log(error);
   }
  }

  async function getInCandidatoById(idCandidato:string) {
    try {
     const {data} = await api.get(`/candidato/candidato-completo-formato-de-entrada?id-candidato=${idCandidato}`)
     setCandidatoForUpdate(data)
    }
    catch (error) {
      console.log(error);
            
    }
  }
  
  function desabledInput(){
    trabalhandoAtualmente?setTrabalhandoAtualmente(false):setTrabalhandoAtualmente(true)
  }

  async function updateCandidato(values:Values) {
    console.log(values);
  }

const SingupSchema = Yup.object().shape({
  nome:Yup.string()
  .required('Obrigatorio'),
  cpf:Yup.string()
  .required('Obrigatorio'),
  dataNascimento:Yup.string()
  .required('Obrigatorio'),
  logradouro:Yup.string()
  .required('Obrigatorio'),
  cidade:Yup.string()
  .required('Obrigatorio'),
  bairro:Yup.string()
  .required('Obrigatorio'),
  telefone:Yup.string()
  .required('Obrigatorio'),
  numero:Yup.string()
  .required('Obrigatorio'),
  senioridade:Yup.string()
  .required('Obrigatorio'),
  instituicao:Yup.string()
  .required('Obrigatorio'),
  descricaoDoCurso:Yup.string()
  .required('Obrigatorio'),
  dataInicioCurso:Yup.string()
  .required('Obrigatorio'),
  dataFimCurso:Yup.string()
  .required('Obrigatorio'),
  nomeEmpresa:Yup.string()
  .required('Obrigatorio'),
  cargo:Yup.string()
  .required('Obrigatorio'),
  descricaoDoCargo:Yup.string()
  .required('Obrigatorio'), 
  dataInicioExperiencia:Yup.string()
  .required('Obrigatorio'), 
})
  

  //Quando Adicionar o put adicionar ! no candidatoForUpdate
  if(idCandidato && !candidatoForUpdate ){
    return(<Loading />)
  }  
  
  return (
    <div className={styles.divMaior}>
      <div className={styles.divAllContentMain} >
      <h1>{idCandidato?'Atualizar':'Adicionar'} Candidato</h1>
      <Formik
        initialValues={
          idCandidato?{
          nome:candidatoForUpdate.nome,
          cpf:candidatoForUpdate.cpf,
          dataNascimento:candidatoForUpdate.dataNascimento,
          logradouro:candidatoForUpdate.logradouro,
          cidade:candidatoForUpdate.cidade,
          bairro:candidatoForUpdate.bairro,
          telefone:candidatoForUpdate.telefone,
          numero:candidatoForUpdate.numero,
          instituicao:candidatoForUpdate.instituicao,
          senioridade:candidatoForUpdate.senioridade,
          descricaoDoCurso:candidatoForUpdate.descricaoDoCurso,
          dataInicioCurso:candidatoForUpdate.dataInicioCurso,
          dataFimCurso:candidatoForUpdate.dataFimCurso,                    
          nomeEmpresa:candidatoForUpdate.nomeEmpresa,
          cargo:candidatoForUpdate.cargo,
          descricaoDoCargo:candidatoForUpdate.descricaoDoCargo,
          dataInicioExperiencia:candidatoForUpdate.dataInicioExperiencia,
          trabalhandoAtualmente:candidatoForUpdate.trabalhandoAtualmente,
          dataFimExperiencia:candidatoForUpdate.dataFimExperiencia
        }
        :{
          nome:'',
          cpf:'',
          dataNascimento:'',
          logradouro:'',
          cidade:'',
          bairro:'',
          telefone:'',
          numero:1,
          instituicao:'',
          senioridade:'',
          descricaoDoCurso:'',
          dataInicioCurso:'',
          dataFimCurso:'',                    
          nomeEmpresa:'',
          cargo:'',
          descricaoDoCargo:'',
          dataInicioExperiencia:'',
          trabalhandoAtualmente:false,
          dataFimExperiencia:''
        }
      }
        validationSchema={SingupSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          {idCandidato? updateCandidato(values) : postCandidato(values) }
        }}
      >
        {({ errors, touched }) =>(
        <Form >
          
        <div className={styles.divContent} >

          <div className={styles.divGridContent}>
          <C.TitleInfoTopic>Dados Pessoais</C.TitleInfoTopic>
          <C.DivFlexForForm>
            <label htmlFor="nome">nome</label>
            <Field 
            id="nome"
            name="nome"
            placeholder="nome" />
             {errors.nome && touched.nome ? (
                  <C.DivError>{errors.nome}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="cpf">Cpf</label>
            <Field 
            as={InputMask}
            // mask="999.999.999-99"
            id="cpf"
            name="cpf"
            placeholder="Doe" />
            {errors.cpf && touched.cpf ? (
                  <C.DivError>{errors.cpf}</C.DivError>
                ) : null}
          </C.DivFlexForForm> 
          <C.DivFlexForForm>
            <label htmlFor="telefone">telefone</label>
            <Field
              id="telefone"
              name="telefone"
              placeholder="telefone"
            />
            {errors.telefone && touched.telefone ? (
                  <C.DivError>{errors.telefone}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="dataNascimento">dataNascimento</label>
            <Field
              id="dataNascimento"
              name="dataNascimento"
              placeholder="dataNascimento"
              as={InputMask}
              // mask="99/99/9999"
            />
             {errors.dataNascimento && touched.dataNascimento ? (
                  <C.DivError>{errors.dataNascimento}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          </div>
          <div className={styles.divGridContent}>
          <C.TitleInfoTopic>Endereço</C.TitleInfoTopic>
          <C.DivFlexForForm>
          <label htmlFor="logradouro">logradouro</label>
          <Field
            id="logradouro"
            name="logradouro"
            placeholder="logradouro"
            type="text"
          />
          {errors.logradouro && touched.logradouro ? (
                  <C.DivError>{errors.logradouro}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="cidade">cidade</label>
            <Field
              id="cidade"
              name="cidade"
              placeholder="cidade"
            />
             {errors.cidade && touched.cidade ? (
                  <C.DivError>{errors.cidade}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="bairro">bairro</label>
            <Field
              id="bairro"
              name="bairro"
              placeholder="bairro"
            />
            {errors.bairro && touched.bairro ? (
                  <C.DivError>{errors.bairro}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="numero">numero</label>
            <Field
              id="numero"
              name="numero"
              type="number"
              placeholder="numero"
            />
            {errors.numero && touched.numero ? (
                  <C.DivError>{errors.numero}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
           </div>
           <div className={styles.divGridContent}>
          <C.TitleInfoTopic>Dados Academicos</C.TitleInfoTopic>
          <C.DivFlexForForm>
            <label htmlFor="instituicao">instituicao</label>
            <Field
              id="instituicao"
              name="instituicao"
              placeholder="instituicao"
            />
             {errors.instituicao && touched.instituicao ? (
                  <C.DivError>{errors.instituicao}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="senioridade">senioridade</label>
            <Field
              id="senioridade"
              name="senioridade"
              placeholder="senioridade"
            />
            {errors.senioridade && touched.senioridade ? (
                  <C.DivError>{errors.senioridade}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="descricaoDoCurso">descricaoDoCurso</label>
            <Field
              id="descricaoDoCurso"
              name="descricaoDoCurso"
              placeholder="descricaoDoCurso"
            />
             {errors.descricaoDoCurso && touched.descricaoDoCurso ? (
                  <C.DivError>{errors.descricaoDoCurso}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="dataInicioCurso">dataInicioCurso</label>
            <Field
              id="dataInicioCurso"
              name="dataInicioCurso"
              as={InputMask}
              // mask="99/99/9999"
            />
             {errors.dataInicioCurso && touched.dataInicioCurso ? (
                  <C.DivError>{errors.dataInicioCurso}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="dataFimCurso">dataFimCurso</label>
            <Field
              id="dataFimCurso"
              name="dataFimCurso"
              as={InputMask}
              // mask="99/99/9999"
            />  
            {errors.dataFimCurso && touched.dataFimCurso ? (
                  <C.DivError>{errors.dataFimCurso}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
           </div>
          <div className={styles.divGridContent}>
          <C.TitleInfoTopic>Experiencias</C.TitleInfoTopic>
          <C.DivFlexForForm>
            <label htmlFor="nomeEmpresa">nomeEmpresa</label>
            <Field
              id="nomeEmpresa"
              name="nomeEmpresa"
              placeholder="nomeEmpresa"
            />
             {errors.nomeEmpresa && touched.nomeEmpresa ? (
                  <C.DivError>{errors.nomeEmpresa}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
           <label htmlFor="cargo">cargo</label>
            <Field
              id="cargo"
              name="cargo"
              placeholder="cargo"
            />
             {errors.cargo && touched.cargo ? (
                  <C.DivError>{errors.cargo}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
            <label htmlFor="descricaoDoCargo">descricaoDoCargo</label>
            <Field
              id="descricaoDoCargo"
              name="descricaoDoCargo"
              placeholder="descricaoDoCargo"
            />
            {errors.descricaoDoCargo && touched.descricaoDoCargo ? (
                  <C.DivError>{errors.descricaoDoCargo}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForForm>
           <label htmlFor="dataInicioExperiencia">dataInicioExperiencia</label>
            <Field
              id="dataInicioExperiencia"
              name="dataInicioExperiencia"
              placeholder="dataInicioExperiencia"
              as={InputMask}
              // mask="99/99/9999"
            />
            {errors.dataInicioExperiencia && touched.dataInicioExperiencia ? (
                  <C.DivError>{errors.dataInicioExperiencia}</C.DivError>
                ) : null}
          </C.DivFlexForForm>
          <C.DivFlexForFormCheckBox>
          <label htmlFor="trabalhandoAtualmente">trabalhandoAtualmente</label>
          <Field
            onClick={()=>desabledInput()} 
            id="trabalhandoAtualmente"
            name="trabalhandoAtualmente"
            placeholder="trabalhandoAtualmente"
            type="checkbox"
          />
          {errors.trabalhandoAtualmente && touched.trabalhandoAtualmente ? (
                  <C.DivError>{errors.trabalhandoAtualmente}</C.DivError>
                ) : null}
         </C.DivFlexForFormCheckBox>
         <C.DivFlexForForm>
           <label htmlFor="dataFimExperiencia">dataFimExperiencia</label>
            <Field
              disabled={trabalhandoAtualmente}
              id="dataFimExperiencia"
              name="dataFimExperiencia"
              placeholder="dataFimExperiencia"
              as={InputMask}
              // mask="99/99/9999"
            />
          </C.DivFlexForForm>
        </div>
        {idCandidato?<button type="submit">Atualizar</button>:<button type="submit">Adicionar</button>}
        </div>
        </Form>
        )}
      </Formik>
      </div>
    </div>)
}

export default FormCurriculo