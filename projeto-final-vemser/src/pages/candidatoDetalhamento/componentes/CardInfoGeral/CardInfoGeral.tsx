import * as GC from "../GlobalStyles.styles";

type Props = {
  dataNascimento: string;
  cpf: string;
  telefone: string;
};
const CardInfoGeral = (candidato: Props) => {
  return (
    <GC.DivTopicosCandidato>
      <GC.TituloInfo>
        <GC.Negrito>Informações Pessoais</GC.Negrito>
      </GC.TituloInfo>
      <GC.Info>
        <GC.Negrito>Data de Nascimento: </GC.Negrito>
        {candidato.dataNascimento}
      </GC.Info>
      <GC.Info>
        <GC.Negrito>CPF: </GC.Negrito>
        {candidato.cpf}
      </GC.Info>
      <GC.Info>
        <GC.Negrito>Telefone: </GC.Negrito>
        {candidato.telefone}
      </GC.Info>
    </GC.DivTopicosCandidato>
  );
};

export default CardInfoGeral;
