import React, { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import * as C from "./ListCandidates.styles";
import { useContext } from "react";
import Loading from "../loading/Loading";
import { GetReducedContext } from "../../context/GetReducedContext";
import listCandidatos from "../../candidatoReduced.json";
const ListCandidates = () => {
  
  
  const { GetInReduced , listCandidates} = useContext<any>(GetReducedContext)
  const [page ,setPage] = useState<any>()
  useEffect(()=>{
    GetInReduced(0)
  },[])

  if(!listCandidates){
    return (<Loading />)
  }
  
  const {candidatos , totalDePaginas} = listCandidates;
  console.log(candidatos);
  console.log(totalDePaginas);
  
  const { candidatoReduced } = listCandidatos;

  return (
    <C.Nav>
        <h1>Lista Candidatos</h1>
      <C.Ul>
        {candidatos.map((listCand: any) => (
          <C.Li key={listCand.idCandidato}>
            <C.ContainerInfoCandidato>
              <C.InfoCandidato>
                Nome: <C.RetornoApi>{listCand.nome}</C.RetornoApi>
              </C.InfoCandidato>
              <C.InfoCandidato>
                Data de Nascimento:{" "}
                <C.RetornoApi>{listCand.dataNascimento}</C.RetornoApi>
              </C.InfoCandidato>
              <C.InfoCandidato>
                Cargo: <C.RetornoApi>{listCand.cargo}</C.RetornoApi>
              </C.InfoCandidato>
              <C.InfoCandidato>
                Senioridade: <C.RetornoApi>{listCand.senioridade}</C.RetornoApi>
              </C.InfoCandidato>
            </C.ContainerInfoCandidato>
          </C.Li>
        ))}
      </C.Ul>
        <button> + </button>
        <button> - </button>

    </C.Nav>
  );
};

export default ListCandidates;
