import moment from "moment";
import { useEffect, useState } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import ModalList from "../../components/modal/ModalList";
import Loading from "../../components/loading/Loading";
import api from "../../api";
import * as C from "../../components/globalStyles/global.styles";
function Vagas() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalVagas, setTotalVagas] = useState<any>();
  const [idVagas, setIdVagas] = useState<number | undefined>();
  const [page, setPage] = useState<number>(0);
  console.log(totalVagas);

  async function getInVagas(id: number) {
    try {
      const { data } = await api.get(
        `/vaga/buscar-vagas-aberto?pagina=${id}&quantidade-por-pagina=7`
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
  const { vagas } = totalVagas;
  console.log(vagas.cidade);

  function VerificaUndefined(value: any) {
    if (!value) {
      value = "-";
    }
    return value;
  }
  return (
    <C.BackGroundTabela>
      <C.DivMenu>
        <C.Title>Listagem de Vagas </C.Title>
        <C.SubTitle>
          <C.ButtonVisualizar>Atualizar Vagas</C.ButtonVisualizar>
        </C.SubTitle>
      </C.DivMenu>
      {visibleModal && (
        <ModalList idVaga={idVagas} onClose={() => setVisibleModal(false)} />
      )}
      <C.ContainerGeralTabela flexD="column" border="0.5px solid #dfe0eb">
        <C.Tabela>
          <C.TheadTabela>
            <C.TrTabela>
              <C.ThTabela radius="10px 0 0 0">Titulo</C.ThTabela>
              <C.ThTabela>Cliente</C.ThTabela>
              <C.ThTabela>Status</C.ThTabela>
              <C.ThTabela>Responsavel</C.ThTabela>
              <C.ThTabela>Estado</C.ThTabela>
              <C.ThTabela>Data DE Abertura</C.ThTabela>
              <C.ThTabela>Cidade</C.ThTabela>
              <C.ThTabela>Analista</C.ThTabela>
              <C.ThTabela>PCD</C.ThTabela>

              <C.ThTabela radius=" 0 10px 0 0 " align={"center"}>
                Vincular Candidato
              </C.ThTabela>
            </C.TrTabela>
          </C.TheadTabela>
          <C.TBodyTable>
            {vagas.map((vaga: any) => (
              <C.TrTabela key={vaga.id}>
                <C.TdTabela>{VerificaUndefined(vaga.titulo)}</C.TdTabela>
                <C.TdTabela>{VerificaUndefined(vaga.cliente)}</C.TdTabela>
                <C.TdTabela>{VerificaUndefined(vaga.status)}</C.TdTabela>
                <C.TdTabela>{VerificaUndefined(vaga.responsavel)}</C.TdTabela>
                <C.TdTabela>{VerificaUndefined(vaga.estado)}</C.TdTabela>
                <C.TdTabela>
                  {moment(vaga.dataAbertura, "YYYY-MM-DD").format("DD/MM/YYYY")}
                </C.TdTabela>
                <C.TdTabela>{VerificaUndefined(vaga.cidade)}</C.TdTabela>
                <C.TdTabela>{VerificaUndefined(vaga.analista)}</C.TdTabela>
                <C.TdTabela>{vaga.pcd ? "Sim" : "Não"}</C.TdTabela>
                <C.TdTabela align={"center"}>
                  <C.ButtonVisualizar onClick={() => ModalTratament(vaga.id)}>
                    Vincular
                  </C.ButtonVisualizar>
                </C.TdTabela>
              </C.TrTabela>
            ))}
          </C.TBodyTable>
        </C.Tabela>
        <C.ContainerButtonsPage>
          <C.BtnSeta onClick={() => nextPage("-")}>
            <IoMdArrowRoundBack />
          </C.BtnSeta>
          <C.SpanDefault> Página:{page + 1}</C.SpanDefault>
          <C.BtnSeta onClick={() => nextPage("+")}>
            <IoMdArrowRoundForward />
          </C.BtnSeta>
        </C.ContainerButtonsPage>
      </C.ContainerGeralTabela>
    </C.BackGroundTabela>
  );
}

export default Vagas;
