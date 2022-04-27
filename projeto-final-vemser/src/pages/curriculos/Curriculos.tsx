import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
/* import * as C from "../../components/globalStyles/global.styles"; */

import * as CC from "./curriculos.styles";
import api from "../../api";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CandidatoDetalhamento from "../candidatoDetalhamento/CandidatoDetalhamento";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import Loading from "../../components/loading/Loading";
import { GetReducedContext } from "../../context/GetReducedContext";
import { topPage, formatDateToUser } from "../../utils";
function Curriculos() {
  const { GetInReduced, listCandidates } = useContext(GetReducedContext);
  const [page, setPage] = useState<number>(0);
  const [candidatoDetalhado, setCandidatoDetalhado] = useState([]);
  const [modalVisualizar, setModalVisualizar] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
  }, []);

  async function getCompletoCandidato(id: number) {
    try {
      const { data } = await api.get(
        `candidato-completo/get-paginado?id-candidato=${id}&pagina=0&quantidade-por-pagina=10`
      );
      const { candidatosCompletos } = data;

      candidatosCompletos.map((props: any) => setCandidatoDetalhado(props));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetInReduced(page);
  }, [page]);

  if (!listCandidates) {
    return <Loading />;
  }
  const { candidatos, totalDePaginas }: any = listCandidates;
  const nextPage = (actionPage: string) => {
    if (actionPage === "+" && page < totalDePaginas - 1) {
      setPage(page + 1);
    }
    if (actionPage === "-" && page > 0) {
      setPage(page - 1);
    }
  };
  const menuDetalhado = (candidato: number, menu: boolean) => {
    getCompletoCandidato(candidato);
    setModalVisualizar(menu);
    
  };
  const zeroLeft = (num: number) => {
    return num < 10 ? `0${num}` : num < 100 ? `0${num}` : num;
  };
  return (
    <CC.BackGroundTabela>
      <CC.DivMenu>
        <CC.Title>Listagem de Currículos </CC.Title>
        <CC.SubTitle>
          <Link to="/form-curriculo">Criar Candidato</Link>
        </CC.SubTitle>
      </CC.DivMenu>

      <CC.ContainerGeralTabela>
        <CC.Tabela>
          <CC.TheadTabela>
            <CC.TrTabela>
              <CC.ThTabela>Nome</CC.ThTabela>
              <CC.ThTabela>Cargo</CC.ThTabela>
              <CC.ThTabela>Data de nascimento</CC.ThTabela>
              <CC.ThTabela>Senioridade</CC.ThTabela>
              <CC.ThTabela>Ações</CC.ThTabela>
            </CC.TrTabela>
          </CC.TheadTabela>

          {candidatos.map((candidato: any) => (
            <CC.TrTabela key={candidato.idCandidato}>
              <CC.TdTabela>{candidato.nome}</CC.TdTabela>
              <CC.TdTabela>{candidato.cargo}</CC.TdTabela>
              <CC.TdTabela>
                {formatDateToUser(candidato.dataNascimento)}
              </CC.TdTabela>
              <CC.TdTabela>{candidato.senioridade}</CC.TdTabela>
              <CC.TdTabela>
                <Link
                  to="#"
                  onClick={() => menuDetalhado(candidato.idCandidato, true)}
                >
                  visualizar
                </Link>
              </CC.TdTabela>
            </CC.TrTabela>
          ))}

          <CC.ContainerButtonsPage>
            <button onClick={() => nextPage("-")}>
              <IoMdArrowRoundBack />
            </button>
            <span> Página: {zeroLeft(page + 1)}</span>

            <button onClick={() => nextPage("+")}>
              <IoMdArrowRoundForward />
            </button>
          </CC.ContainerButtonsPage>
        </CC.Tabela>

       <div>
       {modalVisualizar && (
          <CandidatoDetalhamento
            candidato={candidatoDetalhado}
            fecharMenu={setModalVisualizar}
          />
        )}
       </div>
      </CC.ContainerGeralTabela>
    </CC.BackGroundTabela>
  );
}
/* onClick={() => getCompletoCandidato(candidato.idCandidato)} */
export default Curriculos;
