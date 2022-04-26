import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
/* import * as C from "../../components/globalStyles/global.styles"; */
import * as C from "./curriculos.styles";
import api from "../../api";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CandidatoDetalhamento from "../candidatoDetalhamento/CandidatoDetalhamento";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import Loading from "../../components/loading/Loading";
import { GetReducedContext } from "../../context/GetReducedContext";
import { topPage } from "../../utils";
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
    topPage();
  };
  return (
    <C.ContainerGeral>
      <C.Title>
        <h1>Listagem de curriculos </h1>
        <h3>
          <Link to="/form-curriculo">Criar Candidato</Link>
        </h3>
      </C.Title>
      <C.ContainerInfoCandidato>
        <C.Ul>
          {candidatos.map((candidato: any) => (
            <C.Li key={candidato.idCandidato}>
              <C.CardCandidato>
                <FaUser />

                <C.DadosPessoais>
                  <C.Info>Nome:{candidato.nome}</C.Info>
                  <C.Info>Cargo:{candidato.cargo}</C.Info>
                  <C.Info>Data de Nascimento:{candidato.dataNascimento}</C.Info>
                  <C.Info>Senioridade: {candidato.senioridade}</C.Info>
                  <Link
                    to="#"
                    onClick={() => menuDetalhado(candidato.idCandidato, true)}
                  >
                    visualizar
                  </Link>
                </C.DadosPessoais>
              </C.CardCandidato>
            </C.Li>
          ))}
          <C.ContainerButtonsPage>
            <button onClick={() => nextPage("-")}>
              <IoMdArrowRoundBack />
            </button>

            <button onClick={() => nextPage("+")}>
              <IoMdArrowRoundForward />
            </button>
          </C.ContainerButtonsPage>
        </C.Ul>
        {modalVisualizar && (
          <CandidatoDetalhamento
            candidato={candidatoDetalhado}
            fecharMenu={setModalVisualizar}
          />
        )}
      </C.ContainerInfoCandidato>
      {/*  <C.ContainerGeralTabela>
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

          <C.ContainerButtonsPage>
            <button onClick={() => nextPage("-")}>
              <IoMdArrowRoundBack />
            </button>

            <button onClick={() => nextPage("+")}>
              <IoMdArrowRoundForward />
            </button>
          </C.ContainerButtonsPage>
        </C.TableCandidates>
        {modalVisualizar && (
          <CandidatoDetalhamento
            candidato={candidatoDetalhado}
            fecharMenu={setModalVisualizar}
          />
        )}
      </C.ContainerGeralTabela>
      */}
    </C.ContainerGeral>
  );
}
/* onClick={() => getCompletoCandidato(candidato.idCandidato)} */
export default Curriculos;
