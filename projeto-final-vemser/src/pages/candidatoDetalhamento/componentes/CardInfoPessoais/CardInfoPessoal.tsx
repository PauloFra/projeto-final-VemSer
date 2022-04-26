import { FaUser } from "react-icons/fa";
import { CandidatoDTO } from "../../../../model/CandidatoDTO";
import * as C from "./CardInfoPessoais.styles";
import * as GC from "../GlobalStyles.styles";

type Props = {
  nome: string;
  senioridade: string;
  cargo: string;
};

const CardInfoPessoal = (candidato: Props) => {
  return (
    <C.Container>
      <FaUser />
      <GC.Info>
        <GC.Negrito>Nome: </GC.Negrito>
        {candidato.nome}
      </GC.Info>
      <GC.Info>
        <GC.Negrito>Senioridade: </GC.Negrito>
        {candidato.senioridade}
      </GC.Info>
      <GC.Info>
        <GC.Negrito>Cargo: </GC.Negrito>
        {candidato.cargo}
      </GC.Info>
    </C.Container>
  );
};

export default CardInfoPessoal;
