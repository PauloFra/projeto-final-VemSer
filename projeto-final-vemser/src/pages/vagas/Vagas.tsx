import { useEffect, useState } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

import ModalList from "../../components/modal/ModalList";
import moment from "moment";
import api from "../../api";
import Loading from "../../components/loading/Loading";
import * as C from "../../components/globalStyles/global.styles";
import { VagasDTO } from "../../model/VagasDTO";
import Notiflix from "notiflix";
import { TotalVagasDTO } from "../../model/TotalVagasDTO";
function Vagas() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalVagas, setTotalVagas] = useState<any>();
  const [idVagas, setIdVagas] = useState<number | undefined>();
  const [page, setPage] = useState<number>(0);
  console.log(totalVagas);

  async function getInVagas(id: number) {
    try {
      const { data } = await api.get(
        `/vaga/buscar-vagas-aberto?pagina=${id}&quantidade-por-pagina=9`
      );
      setTotalVagas(data);
    } catch (error) {
      console.log(error);
    }
  }
  const nextPage = (actionPage: string) => {
    if (actionPage === "+" && page < totalVagas.paginas - 1) {
      setPage(page + 1);
    }
    if (actionPage === "-" && page > 0) {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
  }, []);
  useEffect(() => {
    getInVagas(page);
  }, [page]);

  if (!totalVagas) {
    return <Loading altura="100vh" largura="100vw" />;
  }
  function ModalTratament(idVaga: number | undefined) {
    setVisibleModal(true);
    setIdVagas(idVaga);
  }
  return (
    <C.BackGroundTabela>
      <C.DivMenu>
        <C.Title>Listagem de Vagas </C.Title>
      </C.DivMenu>
      {visibleModal && (
        <ModalList idVaga={idVagas} onClose={() => setVisibleModal(false)} />
      )}
      <C.ContainerGeralTabela>
        <C.Tabela>
          <C.TheadTabela>
            <C.TrTabela>
              <C.ThTabela radius="10px 0 0 0">Titulo</C.ThTabela>
              <C.ThTabela>Cliente</C.ThTabela>
              <C.ThTabela>Status</C.ThTabela>
              <C.ThTabela>Responsavel</C.ThTabela>
              <C.ThTabela>estado</C.ThTabela>
              <C.ThTabela>data_abertura</C.ThTabela>
              <C.ThTabela>cidade</C.ThTabela>
              <C.ThTabela>analista</C.ThTabela>
              <C.ThTabela>pcd</C.ThTabela>

              <C.ThTabela radius=" 0 10px 0 0 " align={"center"}>
                Vincular Candidato
              </C.ThTabela>
            </C.TrTabela>
          </C.TheadTabela>
          {totalVagas.vagas.map((vaga: any) => (
            <C.TrTabela key={vaga.id}>
              <C.TdTabela>{vaga.titulo}</C.TdTabela>
              <C.TdTabela>{vaga.cliente}</C.TdTabela>
              <C.TdTabela>{vaga.status}</C.TdTabela>
              <C.TdTabela>{vaga.responsavel}</C.TdTabela>
              <C.TdTabela>{vaga.estado}</C.TdTabela>
              <C.TdTabela>
                {moment(vaga.dataAbertura, "YYYY-MM-DD").format("DD/MM/YYYY")}
              </C.TdTabela>
              <C.TdTabela>{vaga.cidade}</C.TdTabela>
              <C.TdTabela>{vaga.analista}</C.TdTabela>
              <C.TdTabela>{vaga.pcd ? "Sim" : "Não"}</C.TdTabela>
              <C.TdTabela align={"center"}>
                <C.ButtonVisualizar onClick={() => ModalTratament(vaga.id)}>
                  Vincular
                </C.ButtonVisualizar>
              </C.TdTabela>
            </C.TrTabela>
          ))}
          <C.ContainerButtonsPage>
            <button onClick={() => nextPage("-")}>
              <IoMdArrowRoundBack />
            </button>
            <span> Página:{page + 1}</span>

            <button onClick={() => nextPage("+")}>
              <IoMdArrowRoundForward />
            </button>
          </C.ContainerButtonsPage>
        </C.Tabela>
      </C.ContainerGeralTabela>
    </C.BackGroundTabela>
  );
}

export default Vagas;
