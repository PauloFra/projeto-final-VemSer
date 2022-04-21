import InputMask from 'react-input-mask';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Option from '../../components/select/Option';
import escolaridadeOpt from '../../escolaridadeOpt.json';
import Experiencias from '../../components/experienciasForm/Experiencias'
import { useState } from 'react';
import { Values } from '../../model/CandidatoDTO';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import * as C from "../../pages/login/Login.styles";

import Loading from '../../components/loading/Loading';

function FormCurriculo() {
  const {idCandidato} = useParams()
  console.log(idCandidato);
  
  const [candidatoForUpdate , setCandidatoForUpdate] = useState()

  function postCandidato(values:Values){
  
   console.log(values);
   
  }
  
  async function updateCandidato(values:Values) {
    
    console.log(values);
  }

const SingupSchema = Yup.object().shape({
  nome:Yup.string()
  .min(2 , 'Muito Curto')
  .required('Obrigatorio'),
})
  

  //Quando Adicionar o put adicionar ! no candidatoForUpdate
  if(idCandidato && candidatoForUpdate ){
    return(<Loading />)
  }  
  return (
    <div>
      <h1>{idCandidato?'Atualizar':'Adicionar'} Candidato</h1>
      <Formik
        initialValues={
          idCandidato?{
          nome:'',
          cpf:'',
          dataNascimento:'',
          rua:'',
          cidade:'',
          bairro:'',
          telefone:'',
          numero:'',
          instituicao:'',
          senioridade:'',
          descricaoDoCurso:'',
          dataInicioDoCurso:'',
          dataFinalDoCurso:'',                    
          nomeEmpresa:'',
          cargo:'',
          descricaoCargo:'',
          dataInicioExperiencia:'',
          trabalhandoAtualmente:false,
          dataFinalExperiencia:''

        }
        :{
          nome:'',
          cpf:'',
          dataNascimento:'',
          rua:'',
          cidade:'',
          bairro:'',
          telefone:'',
          numero:'',
          instituicao:'',
          senioridade:'',
          descricaoDoCurso:'',
          dataInicioDoCurso:'',
          dataFinalDoCurso:'',                    
          nomeEmpresa:'',
          cargo:'',
          descricaoCargo:'',
          dataInicioExperiencia:'',
          trabalhandoAtualmente:false,
          dataFinalExperiencia:''
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
        <Form>
          <h2>Dados Pessoas</h2>
          <label htmlFor="nome">Nome</label>
          <Field
          id="nome"
          name="nome"
          placeholder="John"
           />
           {errors.nome && touched.nome ? (
                  <C.Error>{errors.nome}</C.Error>
            ) : null}

          <label htmlFor="cpf">Cpf</label>
          <Field 
          as={InputMask}
          mask="999.999.999-99"
          id="cpf"
          name="cpf"
          placeholder="Doe" />

          <label htmlFor="dataNascimento">dataNascimento</label>
          <Field
            id="dataNascimento"
            name="dataNascimento"
            placeholder="dataNascimento"
            as={InputMask}
            mask="99/99/9999"
          />    

          <h2>Endereço</h2>

          <label htmlFor="rua">rua</label>
          <Field
            id="rua"
            name="rua"
            placeholder="rua"
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

          <label htmlFor="dataInicioDoCurso">dataInicioDoCurso</label>
          <Field
            id="dataInicioDoCurso"
            name="dataInicioDoCurso"
            as={InputMask}
            mask="99/99/9999"
          />

          <label htmlFor="dataFinalDoCurso">dataFinalDoCurso</label>
          <Field
            id="dataFinalDoCurso"
            name="dataFinalDoCurso"
            as={InputMask}
            mask="99/99/9999"
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
           <label htmlFor="descricaoCargo">descricaoCargo</label>
          <Field
            id="descricaoCargo"
            name="descricaoCargo"
            placeholder="descricaoCargo"
          />
           <label htmlFor="dataInicioExperiencia">dataInicioExperiencia</label>
          <Field
            id="dataInicioExperiencia"
            name="dataInicioExperiencia"
            placeholder="dataInicioExperiencia"
            as={InputMask}
            mask="99/99/9999"
          />
           <label htmlFor="trabalhandoAtualmente">trabalhandoAtualmente</label>
          <Field
            id="trabalhandoAtualmente"
            name="trabalhandoAtualmente"
            placeholder="trabalhandoAtualmente"
            type="checkbox"
          />
          <br />
           <label htmlFor="dataFinalExperiencia">dataFinalExperiencia</label>
          <Field
            id="dataFinalExperiencia"
            name="dataFinalExperiencia"
            placeholder="dataFinalExperiencia"
            as={InputMask}
            mask="99/99/9999"
          />
         
        {idCandidato?<button type="submit">Atualizar</button>:<button type="submit">Adicionar</button>}
          
        </Form>
        )}
      </Formik>
    </div>)
}

export default FormCurriculo