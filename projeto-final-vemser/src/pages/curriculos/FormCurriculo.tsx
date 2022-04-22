import InputMask from 'react-input-mask';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Option from '../../components/select/Option';
import escolaridadeOpt from '../../escolaridadeOpt.json';
import Experiencias from '../../components/experienciasForm/Experiencias'
import { useState } from 'react';
import { Values } from '../../model/CandidatoDTO';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../api';
import * as C from "../../pages/login/Login.styles";

import styles from './form.module.css'

import Loading from '../../components/loading/Loading';

function FormCurriculo() {
  const {idCandidato} = useParams()
 

  const [trabalhandoAtualmente , setTrabalhandoAtualmente] = useState(false)

  const [candidatoForUpdate , setCandidatoForUpdate] = useState()

  async function postCandidato(values:Values){
   try{
    const {data} = await api.post('candidato/candidato-completo' , values)
    console.log(data);
    
   }
   catch(error){
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
  // nome:Yup.string()
  // .min(2 , 'Muito Curto')
  // .required('Obrigatorio'),
})
  

  //Quando Adicionar o put adicionar ! no candidatoForUpdate
  if(idCandidato && candidatoForUpdate ){
    return(<Loading />)
  }  
  return (
    <div className={styles.divMaior}>
      <div className={styles.divContent}>
      <h1>{idCandidato?'Atualizar':'Adicionar'} Candidato</h1>
      <Formik
        initialValues={
          !idCandidato?{
          nome:'ForTeste',
          cpf:'10010010010',
          dataNascimento:'2000-10-10',
          logradouro:'Teste',
          cidade:'teste',
          bairro:'teste',
          telefone:'teste',
          numero:1,
          instituicao:'teste',
          senioridade:'teste',
          descricaoDoCurso:'teste',
          dataInicioCurso:'2000-10-10',
          dataFimCurso:'2000-10-10',                    
          nomeEmpresa:'teste',
          cargo:'teste',
          descricaoDoCargo:'descricaoDoCurso',
          dataInicioExperiencia:'2000-10-10',
          trabalhandoAtualmente:false,
          dataFimExperiencia:'2000-10-10'

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
          <h2>Dados Pessoas</h2>
          <label htmlFor="nome">nome</label>
          <Field 
          id="nome"
          name="nome"
          placeholder="nome" />

          <label htmlFor="cpf">Cpf</label>
          <Field 
          as={InputMask}
          // mask="999.999.999-99"
          id="cpf"
          name="cpf"
          placeholder="Doe" />

          <label htmlFor="dataNascimento">dataNascimento</label>
          <Field
            id="dataNascimento"
            name="dataNascimento"
            placeholder="dataNascimento"
            as={InputMask}
            // mask="99/99/9999"
          />

          <h2>Endereço</h2>

          <label htmlFor="logradouro">logradouro</label>
          <Field
            id="logradouro"
            name="logradouro"
            placeholder="logradouro"
            type="text"
          />
          
          
          <label htmlFor="cidade">cidade</label>
          <Field
            id="cidade"
            name="cidade"
            placeholder="cidade"
          />
          
          <label htmlFor="bairro">bairro</label>
          <Field
            id="bairro"
            name="bairro"
            placeholder="bairro"
          />
          
          <label htmlFor="numero">numero</label>
          <Field
            id="numero"
            name="numero"
            type="number"
            placeholder="numero"
          />
          <label htmlFor="telefone">telefone</label>
          <Field
            id="telefone"
            name="telefone"
            placeholder="telefone"
          />
          <h2>Dados Academicos</h2>

          <label htmlFor="instituicao">instituicao</label>
          <Field
            id="instituicao"
            name="instituicao"
            placeholder="instituicao"
          />
          
          <label htmlFor="senioridade">senioridade</label>
          <Field
            id="senioridade"
            name="senioridade"
            placeholder="senioridade"
          />
          <label htmlFor="descricaoDoCurso">descricaoDoCurso</label>
          <Field
            id="descricaoDoCurso"
            name="descricaoDoCurso"
            placeholder="descricaoDoCurso"
          />

          <label htmlFor="dataInicioCurso">dataInicioCurso</label>
          <Field
            id="dataInicioCurso"
            name="dataInicioCurso"
            as={InputMask}
            // mask="99/99/9999"
          />

          <label htmlFor="dataFimCurso">dataFimCurso</label>
          <Field
            id="dataFimCurso"
            name="dataFimCurso"
            as={InputMask}
            // mask="99/99/9999"
          />  
          <h2>Experiencias</h2>
          <label htmlFor="nomeEmpresa">nomeEmpresa</label>
          <Field
            id="nomeEmpresa"
            name="nomeEmpresa"
            placeholder="nomeEmpresa"
          />
           <label htmlFor="cargo">cargo</label>
          <Field
            id="cargo"
            name="cargo"
            placeholder="cargo"
          />
           <label htmlFor="descricaoDoCargo">descricaoDoCargo</label>
          <Field
            id="descricaoDoCargo"
            name="descricaoDoCargo"
            placeholder="descricaoDoCargo"
          />
           <label htmlFor="dataInicioExperiencia">dataInicioExperiencia</label>
          <Field
            id="dataInicioExperiencia"
            name="dataInicioExperiencia"
            placeholder="dataInicioExperiencia"
            as={InputMask}
            // mask="99/99/9999"
          />
           <label htmlFor="trabalhandoAtualmente">trabalhandoAtualmente</label>
          <Field
            onClick={()=>desabledInput()}
            className={styles.checkboxInput} 
            id="trabalhandoAtualmente"
            name="trabalhandoAtualmente"
            placeholder="trabalhandoAtualmente"
            type="checkbox"
          />
          <br />
           <label htmlFor="dataFimExperiencia">dataFimExperiencia</label>
            <Field
              disabled={trabalhandoAtualmente}
              id="dataFimExperiencia"
              name="dataFimExperiencia"
              placeholder="dataFimExperiencia"
              as={InputMask}
              // mask="99/99/9999"
            />
          
         
        {idCandidato?<button type="submit">Atualizar</button>:<button type="submit">Adicionar</button>}
        </div>
        </Form>
        )}
      </Formik>
      </div>
    </div>)
}

export default FormCurriculo