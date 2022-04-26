import { AiOutlineClose } from "react-icons/ai";


import * as C from "./candidatoDetalhado.styles";
import { Link, useNavigate } from "react-router-dom";
import CardExperiencia from "./componentes/CardExperiencia/CardExperiencia";

import CardInfoPessoal from "./componentes/CardInfoPessoais/CardInfoPessoal";
import CardInfoGeral from "./componentes/CardInfoGeral/CardInfoGeral";
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
  const { experiencias } = candidato;
  console.log(experiencias);

  const navigate = useNavigate();

  function NavigateById(id: number) {
    navigate(`/form-curriculo/${id}`);
  }
  console.log("candidato =>", candidato);

  return (
    <C.DivContainerDetail>
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
      />
      <CardInfoGeral
        dataNascimento={candidato.dataNascimento}
        cpf={candidato.cpf}
        telefone={candidato.telefone}
      />

      <CardExperiencia experiencia={experiencias} />

      <C.DivBtn>
        <C.ButtonAsLink onClick={() => NavigateById(candidato.idCandidato)}>
          Atualizar Candidato
        </C.ButtonAsLink>
      </C.DivBtn>
    </C.DivContainerDetail>
  );
};

export default CandidatoDetalhamento;
