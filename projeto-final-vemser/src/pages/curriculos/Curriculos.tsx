import * as CC from "../../components/globalStyles/global.styles";
import api from "../../api";
import CandidatoDetalhamento from "../candidatoDetalhamento/CandidatoDetalhamento";
import Loading from "../../components/loading/Loading";
import { formatDateToUser } from "../../utils";
import { Link } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

function Curriculos() {
  const [page, setPage] = useState<number>(0);
  const [candidatoDetalhado, setCandidatoDetalhado] = useState([]);
  const [modalVisualizar, setModalVisualizar] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [candidatosInput, setCandidatosInput] = useState<any>();
  const [listCandidates, setListCandidates] = useState<any>();
  const [listCandidatesAll, setListCandidatesAll] = useState<any>();
  
  const [isLoading , setIsLoading] = useState<boolean>(true)

  const [inputValue, setInputValue] = useState<string | undefined>();

  async function GetInReduced(page: number, qtdPorPage: number) {
    try {
      const { data } = await api.get(
        `/candidato/get-paginado?pagina=${page}&quantidadePorPagina=${qtdPorPage}`
      );
      setCandidatosInput(data.candidatos);
      setListCandidates(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetInReducedTotal() {
    if (listCandidates) {
      try {
        const { data } = await api.get(
          `/candidato/get-paginado?pagina=0&quantidadePorPagina=${listCandidates.totalDeElementos}`
        );
        setListCandidatesAll(data);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
      GetInReduced(page, 9);
    }
  }, []);
  useEffect(() => {
    GetInReduced(page, 9);
  }, [page]);

  useEffect(() => {
    GetInReducedTotal();
  }, [listCandidates]);

  async function getCompletoCandidato(id: number) {
    setCandidatoDetalhado([]);
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

  const nextPage = (actionPage: string) => {
    setModalVisualizar(false);
    if (actionPage === "+" && page < listCandidates.totalDePaginas - 1) {
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

  function searchInCandidates(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    if (listCandidatesAll) {
      const { candidatos } = listCandidatesAll;
      setCandidatosInput(
        candidatos.filter((candidato: any) =>
          candidato.nome.toLowerCase().includes(inputValue?.toLowerCase())
        )
      );
    }
  }

  if (isLoading) {
    return <Loading altura="100vh" largura="100vw" />;
  }
  return (
    <CC.BackGroundTabela>
      <CC.DivAlignTop>
        <CC.DivFlex>
          <CC.Title>Listagem de Currículos </CC.Title>
        <CC.Search
            placeholder="Pesquise"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              searchInCandidates(event)
            }
          ></CC.Search>  
          <AiOutlineSearch />
        </CC.DivFlex>

        <CC.SubTitle>
          <Link to="/form-curriculo">
            <CC.ButtonVisualizar>Adicionar Candidato</CC.ButtonVisualizar>
          </Link>
        </CC.SubTitle>
      </CC.DivAlignTop>

      <CC.ContainerGeralTabela>
        <CC.DivAuxiliar>
          <CC.Tabela>
            <CC.TheadTabela>
              <CC.TrTabela>
                <CC.ThTabela radius="10px 0 0 0">Nome</CC.ThTabela>
                <CC.ThTabela>Cargo</CC.ThTabela>
                <CC.ThTabela>Data de nascimento</CC.ThTabela>
                <CC.ThTabela>Senioridade</CC.ThTabela>
                <CC.ThTabela radius=" 0 10px 0 0" align={"center"}>
                  Visualizar Detalhes
                </CC.ThTabela>
              </CC.TrTabela>
            </CC.TheadTabela>
            <CC.TBodyTable>
              {candidatosInput.slice(0, 9).map((candidato: any) => (
                <CC.TrTabela key={candidato.idCandidato}>
                  <CC.TdTabela>{candidato.nome}</CC.TdTabela>
                  <CC.TdTabela>{candidato.cargo}</CC.TdTabela>
                  <CC.TdTabela>
                    {formatDateToUser(candidato.dataNascimento)}
                  </CC.TdTabela>
                  <CC.TdTabela>{candidato.senioridade}</CC.TdTabela>
                  <CC.TdTabela align={"center"}>
                    <CC.ButtonVisualizar
                      onClick={() => menuDetalhado(candidato.idCandidato, true)}
                    >
                      Visualizar
                    </CC.ButtonVisualizar>
                  </CC.TdTabela>
                </CC.TrTabela>
              ))}
            </CC.TBodyTable>
          </CC.Tabela>
          <CC.ContainerButtonsPage>
            <CC.BtnSeta onClick={() => nextPage("-")}>
              <IoMdArrowRoundBack />
            </CC.BtnSeta>
            <CC.SpanDefault> Página: {zeroLeft(page + 1)}</CC.SpanDefault>

            <CC.BtnSeta onClick={() => nextPage("+")}>
              <IoMdArrowRoundForward />
            </CC.BtnSeta>
          </CC.ContainerButtonsPage>
        </CC.DivAuxiliar>
        {modalVisualizar && (
          <CandidatoDetalhamento
            candidato={candidatoDetalhado}
            fecharMenu={setModalVisualizar}
          />
        )}
      </CC.ContainerGeralTabela>
    </CC.BackGroundTabela>
  );
}
/* onClick={() => getCompletoCandidato(candidato.idCandidato)} */
export default Curriculos;
