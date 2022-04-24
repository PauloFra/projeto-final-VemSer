import { Link } from "react-router-dom";
import * as C from "../../components/globalStyles/global.styles";
import api from "../../api";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CandidatoDetalhamento from "../candidatoDetalhamento/CandidatoDetalhamento";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import Loading from "../../components/loading/Loading";
import { GetReducedContext } from "../../context/GetReducedContext";
function Curriculos() {
  const { GetInReduced, listCandidates } = useContext(GetReducedContext);
  const [page, setPage] = useState<number>(0);
  const [candidatoDetalhado, setCandidatoDetalhado] = useState([]);
  const [modalVisualizar, setModalVisualizar] = useState(false);
  const [mapCandidato, setMapCandidato] = useState();
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
  return (
    <C.ContainerGeral>
      <C.DivMenu>
        <h1>Listagem de curriculos </h1>
        <h3>
          <Link to="/form-curriculo">Criar Candidato</Link>
        </h3>
      </C.DivMenu>
      <C.ContainerContent>
        <C.ContainerGeralTabela>
          <C.TableCandidates>
            <C.TableHead>
              <C.TableTr>
                <C.TableTh>Nome</C.TableTh>
                <C.TableTh>Cargo</C.TableTh>
                <C.TableTh>Data de nascimento</C.TableTh>
                <C.TableTh>Senioridade</C.TableTh>
                <C.TableTh>Ações</C.TableTh>
              </C.TableTr>
            </C.TableHead>
            <C.TableBody>
              {candidatos.map((candidato: any) => (
                <C.TableTr key={candidato.idCandidato}>
                  <C.TableTd>{candidato.nome}</C.TableTd>
                  <C.TableTd>{candidato.cargo}</C.TableTd>
                  <C.TableTd>{candidato.dataNascimento}</C.TableTd>
                  <C.TableTd>{candidato.senioridade}</C.TableTd>
                  <C.TableTd>
                    <Link
                      to="#"
                      onClick={() => menuDetalhado(candidato.idCandidato, true)}
                    >
                      visualizar
                    </Link>
                  </C.TableTd>
                </C.TableTr>
              ))}
            </C.TableBody>
          </C.TableCandidates>
          <C.DivMenu>
            <button onClick={() => nextPage("-")}>
              <IoMdArrowRoundBack />
            </button>

            <button onClick={() => nextPage("+")}>
              <IoMdArrowRoundForward />
            </button>
          </C.DivMenu>
        </C.ContainerGeralTabela>
        {modalVisualizar && (
          <CandidatoDetalhamento
            candidato={candidatoDetalhado}
            fecharMenu={setModalVisualizar}
          />
        )}
      </C.ContainerContent>
    </C.ContainerGeral>
  );
}
/* onClick={() => getCompletoCandidato(candidato.idCandidato)} */
export default Curriculos;
