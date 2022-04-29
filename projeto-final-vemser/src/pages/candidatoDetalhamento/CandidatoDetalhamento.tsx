import { AiOutlineClose } from "react-icons/ai";

import * as C from "./candidatoDetalhado.styles";
import { useNavigate } from "react-router-dom";
import CardExperiencia from "./componentes/CardExperiencia/CardExperiencia";
import { formatDateToUser } from "../../utils";
import CardInfoPessoal from "./componentes/CardInfoPessoais/CardInfoPessoal";
import CardInfoGeral from "./componentes/CardInfoGeral/CardInfoGeral";
import CardDadosAcademicos from "./componentes/CardDadosAcademicos/CardDadosAcademicos";
import Loading from "../../components/loading/Loading";

type Props = {
  candidato: any;
  fecharMenu: Function;
};
type PropsMap = {
  dataFim: string;
  dataInicio: string;
  descricao: string;
  idExperiencia: number;
  nomeEmpresa: string;
};

const CandidatoDetalhamento = ({ candidato, fecharMenu }: Props) => {
  const { experiencias, dadosEscolares, idCandidato } = candidato;

  const navigate = useNavigate();

  function NavigateById(id: number) {
    navigate(`/form-curriculo/${id}`);
  }
  if (candidato.length === 0) {
    return <Loading altura="60vh" largura="28.69vw" />;
  }
  return (
    <C.DivContainerDetail >
      <C.DivFlex>
        <h2>Detalhes do Candidato</h2>

        <C.ButtonClose onClick={() => fecharMenu(false)}>
          <AiOutlineClose />
        </C.ButtonClose>
      </C.DivFlex>
      <CardInfoPessoal
        nome={candidato.nome}
        senioridade={candidato.senioridade}
        cargo={candidato.cargo}
        idCandidato={idCandidato}
      />
      <CardInfoGeral
        dataNascimento={formatDateToUser(candidato.dataNascimento)}
        cpf={candidato.cpf}
        telefone={candidato.telefone}
      />
      <CardDadosAcademicos dadosEscolares={dadosEscolares} />
      <CardExperiencia experiencias={experiencias} />

      <C.DivBtn>
        <C.ButtonAsLink onClick={() => NavigateById(candidato.idCandidato)}>
          Atualizar Candidato
        </C.ButtonAsLink>
      </C.DivBtn>
    </C.DivContainerDetail>
  );
};

export default CandidatoDetalhamento;
