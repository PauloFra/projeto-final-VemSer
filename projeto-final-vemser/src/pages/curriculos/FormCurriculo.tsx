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
import { prepareDataToInsert } from '../../utils';
function FormCurriculo() {
  const {idCandidato} = useParams()
  console.log(idCandidato);
  
  const [candidatoForUpdate , setCandidatoForUpdate] = useState()

  function postCandidato(values:Values){
   const newValues = prepareDataToInsert(values);
   console.log(newValues);
   
  }
  
  async function updateCandidato(values:Values) {
    const newValues = prepareDataToInsert(values);
    console.log(newValues);
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
          nome: '',
          cpf: '',
          dataNascimento: '',
          rua:"",
          cidade:"",
          bairro:"",
          numero:"",
          escolaridade:"",
          dataInicioEscolaridade:"",
          dataFinal:"",
          nomeEmpresa:"",
          cargo:"",
          descricao:"",
          dataInicioExperiencia:"",
          trabalhandoAtualmente:false,
          dataFinalExperiencia:""

        }
        :{
        nome: '',
        cpf: '',
        dataNascimento: '',
        rua:"",
        cidade:"",
        bairro:"",
        numero:"",
        escolaridade:"",
        dataInicioEscolaridade:"",
        dataFinal:"",
        nomeEmpresa:"",
        cargo:"",
        descricao:"",
        dataInicioExperiencia:"",
        trabalhandoAtualmente:false,
        dataFinalExperiencia:""
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
          <label htmlFor="nome">First Name</label>
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
          <h2>Dados Academicos</h2>

          <Field as="select"  name="escolaridade">
              <Option list={escolaridadeOpt} />
          </Field>

          <label htmlFor="dataInicioEscolaridade">dataInicioEscolaridade</label>
          <Field
            id="dataInicioEscolaridade"
            name="dataInicioEscolaridade"
            placeholder="dataInicioEscolaridade"
            as={InputMask}
            mask="99/99/9999"
          />

          <label htmlFor="dataFinal">dataFinal</label>
          <Field
            id="dataFinal"
            name="dataFinal"
            placeholder="dataFinal"
            as={InputMask}
            mask="99/99/9999"
          />
          <h2>Experiencias</h2>
          <Experiencias />
          {/* <button onClick={()=> createExperience() }>+</button>
       */}
        {idCandidato?<button type="submit">Atualizar</button>:<button type="submit">Adicionar</button>}
          
        </Form>
        )}
      </Formik>
    </div>)
}

export default FormCurriculo