import Notiflix from "notiflix";
import Loading from "../loading/Loading";
import api from "../../api";
import * as C from "./ListCandidates.styles";
import { useEffect, useState , ChangeEvent} from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { formatDateToUser, zeroLeft } from "../../utils";

type ListCandidatesProps = {
  idVaga: number | string | undefined;
};
const ListCandidates = ({ idVaga }: ListCandidatesProps) => {
  const [page, setPage] = useState<number>(0);
  const [candidatados, setCandidatados] = useState<any>();
  const [listCandidates, setListCandidates] = useState<any>();
  const [listCandidatesAll, setListCandidatesAll] = useState<any>();
  const [isLoading , setIsLoading] = useState<boolean>(true)

  const [inputValue, setInputValue] = useState<any>();
  const [candidatosInput, setCandidatosInput] = useState<any>();
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

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;
      GetInReduced(page, 9);
      getInCadastradosVagas();
    }
  }, []);

  useEffect(() => {
    GetInReduced(page, 9);
  }, [page]);

  useEffect(() => {
    GetInReducedTotal();
  }, [listCandidates]);

  async function GetInReducedTotal() {
    if (listCandidates) {
      try {
        // ${listCandidates.totalDeElementos/10
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

  async function getInCadastradosVagas() {
    try {
      const { data } = await api.get(
        `/vaga/candidatos-vinculados?id-vaga=${idVaga}`
      );
      setCandidatados(data);
    } catch (error) {
      console.log(error);
    }
  }

  const nextPage = (actionPage: string) => {
    if (actionPage === "+" && page < listCandidates.totalDePaginas - 1) {
      setPage(page + 1);
    }
    if (actionPage === "-" && page > 0) {
      setPage(page - 1);
    }
  };

  async function VincularCandidato(idCandidato: number) {
    try {
      const { data } = await api.post(
        `/vaga/vincular-candidato?idCandidato=${idCandidato}&idVaga=${idVaga}`
      );
      Notiflix.Notify.success("Candidato Vinculado");
      GetInReduced(page, 9);
    } catch (error: any) {
      if (error.response.data.message === "Candidato já vinculado à vaga") {
        Notiflix.Notify.warning("Ops Candidato ja vinculado");
      }
    }
    getInCadastradosVagas();
  }
  function searchInCandidates(event: any) {
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
  function DisabledButton(idCandidato: number, event:ChangeEvent<HTMLInputElement>) {
    VincularCandidato(idCandidato);
    event.target.disabled = true;
  }
  if (isLoading) {
    return <Loading altura="50vh" largura=" 50vw" />;
  }
 
  return (
    <C.BackGroundTabela>
      <C.DivAlignTop>
        <C.DivFlex>
          <C.Title>Candidatos </C.Title>
           <C.Input
            placeholder="Pesquise"
            onChange={(event:ChangeEvent<HTMLInputElement>) => searchInCandidates(event)}
          ></C.Input>
        </C.DivFlex>
      </C.DivAlignTop>
      <C.DivAuxiliar>
        <C.Tabela>
          <C.TheadTabela>
            <C.TrTabela>
              <C.ThTabela>Nome</C.ThTabela>
              <C.ThTabela> Data de Nascimento</C.ThTabela>
              <C.ThTabela>Cargo</C.ThTabela>
              <C.ThTabela>Senioridade</C.ThTabela>
              <C.ThTabela align={"center"}>Vincular Candidato</C.ThTabela>
            </C.TrTabela>
          </C.TheadTabela>
          <C.TBodyTable>
            {candidatosInput.slice(0, 9).map((listCand: any) => (
              <C.TrTabela key={listCand.idCandidato}>
                <C.TdTabela>{listCand.nome}</C.TdTabela>
                <C.TdTabela>
                  {formatDateToUser(listCand.dataNascimento)}
                </C.TdTabela>
                <C.TdTabela>{listCand.cargo}</C.TdTabela>
                <C.TdTabela>{listCand.senioridade}</C.TdTabela>
                <C.TdTabela align={"center"}>
                  <C.ButtonVisualizar
                    disabled={candidatados.includes(listCand.idCandidato)}
                    onClick={(event:any) =>
                      DisabledButton(listCand.idCandidato, event)
                    }
                  >
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
          <C.SpanDefault> Página:{zeroLeft(page + 1)}</C.SpanDefault>
          <C.BtnSeta onClick={() => nextPage("+")}>
            <IoMdArrowRoundForward />
          </C.BtnSeta>
        </C.ContainerButtonsPage>
      </C.DivAuxiliar>
    </C.BackGroundTabela>
  );
};

export default ListCandidates;
