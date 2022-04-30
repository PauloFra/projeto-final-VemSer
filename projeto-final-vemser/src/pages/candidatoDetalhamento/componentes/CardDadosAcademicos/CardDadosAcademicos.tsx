import { formatDateToUser } from "../../../../utils";
import { PropsDados } from "../../TypesDetalhamento";
import * as GC from "../GlobalStyles.styles";
import * as C from "./CardDadosAcademicos.styles";

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
              <GC.DivColumn>
                <GC.Info>
                  <GC.Negrito>Nome: </GC.Negrito>
                  {descricao}
                </GC.Info>
                <GC.Info>
                  <GC.Negrito>Instituição: </GC.Negrito>
                  {instituicao}
                </GC.Info>
              </GC.DivColumn>

              <GC.DivColumn>
                <GC.Info>
                  <GC.Negrito>Início: </GC.Negrito>
                  {formatDateToUser(dataInicio)}
                </GC.Info>
                <GC.Info>
                  <GC.Negrito>Conclusão: </GC.Negrito>
                  {formatDateToUser(dataFim)}
                </GC.Info>
              </GC.DivColumn>
            </C.DivContainerDados>
          )
        )}
    </GC.DivTopicosCandidato>
  );
};

export default CardDadosAcademicos;
