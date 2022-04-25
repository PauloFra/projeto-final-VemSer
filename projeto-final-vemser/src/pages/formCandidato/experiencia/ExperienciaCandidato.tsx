import React, { useState } from "react";
import { FormikHelpers, useFormik } from "formik";
import { ExperienciaDTO } from "../../../model/ExperienciaDTO";

const ExperienciaCandidato = () => {
  const formikProps = useFormik({
    initialValues: {
      nomeEmpresa: "",
      cargo: "",
      descricaoDoCargo: "",
      dataInicioExperiencia: "",
      trabalhandoAtualmente: "",
      dataFimExperiencia: "",
      senioridade: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formikProps.handleSubmit}>
        <div>
          <label htmlFor="nomeEmpresa">nomeEmpresa</label>
          <input
            name="nomeEmpresa"
            id="nomeEmpresa"
            placeholder=""
            value={formikProps.values.nomeEmpresa}
            onChange={formikProps.handleChange}
          />
        </div>
        <div>
          <label htmlFor="cargo">cargo</label>
          <input
            type="text"
            name="cargo"
            id="cargo"
            placeholder=""
            value={formikProps.values.cargo}
            onChange={formikProps.handleChange}
          />
        </div>
        <div>
          <label htmlFor="descricaoDoCargo">descricaoDoCargo</label>
          <input
            type="text"
            name="descricaoDoCargo"
            id="descricaoDoCargo"
            placeholder=""
            value={formikProps.values.descricaoDoCargo}
            onChange={formikProps.handleChange}
          />
        </div>
        <div>
          <label htmlFor="dataInicioExperiencia">dataInicioExperiencia</label>
          <input
            type="text"
            name="dataInicioExperiencia"
            id="dataInicioExperiencia"
            placeholder=""
            value={formikProps.values.dataInicioExperiencia}
            onChange={formikProps.handleChange}
          />
        </div>
        <div>
          <label htmlFor="trabalhandoAtualmente">trabalhandoAtualmente</label>
          <input
            type="text"
            name="trabalhandoAtualmente"
            id="trabalhandoAtualmente"
            placeholder=""
            value={formikProps.values.trabalhandoAtualmente}
            onChange={formikProps.handleChange}
          />
        </div>
        <div>
          <label htmlFor="dataFimExperiencia">dataFimExperiencia</label>
          <input
            type="text"
            name="dataFimExperiencia"
            id="dataFimExperiencia"
            placeholder=""
            value={formikProps.values.dataFimExperiencia}
            onChange={formikProps.handleChange}
          />
        </div>
        <div>
          <label htmlFor="senioridade">senioridade</label>
          <input
            type="text"
            name="senioridade"
            id="senioridade"
            placeholder=""
            value={formikProps.values.senioridade}
            onChange={formikProps.handleChange}
          />
        </div>
        <button type="submit">Adicionar Experiência</button>
      </form>
    </div>
  );
};

export default ExperienciaCandidato;
