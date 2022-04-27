import React from "react";
import { PropsDados } from "../../TypesDetalhamento";
import * as GC from "../GlobalStyles.styles";
import * as C from "./CardDadosAcademicos.styles";
import { formatDateToUser } from "../../../../utils";

type Props = {
  dadosEscolares: {
    dataFim: string;
    dataInicio: string;
    descricao: string;
    idDadosEscolares: number;
    instituicao: string;
  };
};
const CardDadosAcademicos = ({ dadosEscolares }: PropsDados) => {
  console.log(dadosEscolares);

  return (
    <GC.DivTopicosCandidato>
      <GC.TituloInfo>
        <GC.Negrito>Cursos</GC.Negrito>
      </GC.TituloInfo>
      {dadosEscolares &&
        dadosEscolares.map(
          ({
            descricao,
            instituicao,
            dataInicio,
            dataFim,
            idDadosEscolares,
          }) => (
            <C.DivContainerDados key={idDadosEscolares}>
              <GC.Info>
                <GC.Negrito>Nome: </GC.Negrito>
                {descricao}
              </GC.Info>
              <GC.Info>
                <GC.Negrito>Instituição: </GC.Negrito>
                {instituicao}
              </GC.Info>
              <GC.Info>
                <GC.Negrito>Data de Início: </GC.Negrito>
                {formatDateToUser(dataInicio)}
              </GC.Info>
              <GC.Info>
                <GC.Negrito>Data de conclusão: </GC.Negrito>
                {formatDateToUser(dataFim)}
              </GC.Info>
            </C.DivContainerDados>
          )
        )}
    </GC.DivTopicosCandidato>
  );
};

export default CardDadosAcademicos;
