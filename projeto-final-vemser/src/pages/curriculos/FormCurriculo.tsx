
import arrayCandidato from '../../candidato.json'
import InputMask from 'react-input-mask'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Option from '../../components/select/Option'
import escolaridadeOpt from '../../escolaridadeOpt.json'
interface Values {
  nome: string;
  cpf: string;
  dataNascimento: string;
  rua:string,
  cidade:string,
  bairro:string,
  numero:string,
  escolaridade:string,
  dataInicioEscolaridade:string,
  dataFinal:string
  nomeEmpresa:string,
  cargo:string,
  descricao:string,
  dataInicioExperiencia:string,
  trabalhandoAtualmente:string,
  dataAtual:string

}

function FormCurriculo() {

  function postCandidato(values:Values){
    console.log(values);
  }

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
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
          trabalhandoAtualmente:"",
          dataAtual:""

        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          postCandidato(values)
        }}
      >
        <Form>
          <h2>Dados Pessoas</h2>
          <label htmlFor="nome">First Name</label>
          <Field
          id="nome"
          name="nome"
          placeholder="John"
           />

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
          <Field as="select"  name="escolaridade">
              <Option list={escolaridadeOpt} />
          </Field>

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
           <label htmlFor="descricao">descricao</label>
          <Field
            id="descricao"
            name="descricao"
            placeholder="descricao"
          />
           <label htmlFor="dataInicio">dataInicio</label>
          <Field
            id="dataInicio"
            name="dataInicio"
            placeholder="dataInicio"
          />
           <label htmlFor="trabalhandoAtualmente">trabalhandoAtualmente</label>
          <Field
            id="trabalhandoAtualmente"
            name="trabalhandoAtualmente"
            placeholder="trabalhandoAtualmente"
            type="checkbox"
          />
          <br />
           <label htmlFor="dataAtual">dataAtual</label>
          <Field
            id="dataAtual"
            name="dataAtual"
            placeholder="dataAtual"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>)
}

export default FormCurriculo