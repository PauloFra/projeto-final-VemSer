import { Field } from "formik";
import InputMask from "react-input-mask";
function Experiencias({ setProps }: any) {
  function tirarExperiencia() {
    setProps();
  }
  return (
    <>
      {/* <button onClick={()=>tirarExperiencia()}>-</button> */}
      <label htmlFor="nomeEmpresa">nomeEmpresa</label>
      <Field id="nomeEmpresa" name="nomeEmpresa" placeholder="nomeEmpresa" />
      <label htmlFor="cargo">cargo</label>
      <Field id="cargo" name="cargo" placeholder="cargo" />
      <label htmlFor="descricao">descricao</label>
      <Field id="descricao" name="descricao" placeholder="descricao" />
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
    </>
  );
}

export default Experiencias;
