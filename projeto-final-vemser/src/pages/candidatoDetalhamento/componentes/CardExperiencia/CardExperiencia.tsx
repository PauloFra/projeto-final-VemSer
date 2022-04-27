import React from "react";
import { PropsExperiencia } from "../../TypesDetalhamento";
import { formatDateToUser } from "../../../../utils";
import * as GC from "../GlobalStyles.styles";
type Props = {
  experiencia: {
    dataFim: string;
    dataInicio: string;
    descricao: string;
    idExperiencia: number;
    nomeEmpresa: string;
  };
};

const CardExperiencia = ({ experiencia }: any) => {
  console.log(experiencia);

  return (
    <GC.DivTopicosCandidato>
      <GC.TituloInfo>
        <GC.Negrito>Experiência Profissional</GC.Negrito>
      </GC.TituloInfo>
      {experiencia &&
        experiencia.map((exp: PropsExperiencia) => (
          <GC.ContainerInfo key={exp.idExperiencia}>
            <GC.Info>
              <GC.Negrito>Nome da Empresa:</GC.Negrito>
              {exp.nomeEmpresa}
            </GC.Info>
            <GC.Info>
              <GC.Negrito>Data de início: </GC.Negrito>
              {formatDateToUser(exp.dataInicio)}
            </GC.Info>
            <GC.Info>
              <GC.Negrito>Data de saída: </GC.Negrito>
              {formatDateToUser(exp.dataFim)}
            </GC.Info>
            <GC.Info>
              <GC.Negrito>Descrição: </GC.Negrito>
              {exp.descricao}
            </GC.Info>
          </GC.ContainerInfo>
        ))}
    </GC.DivTopicosCandidato>
  );
};

export default CardExperiencia;
