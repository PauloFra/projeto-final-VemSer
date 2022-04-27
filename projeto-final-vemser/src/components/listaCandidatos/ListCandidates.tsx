import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./ListCandidates.styles";
import { useContext } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { IdType } from "../../model/TypeIds";
import Loading from "../loading/Loading";
import { GetReducedContext } from "../../context/GetReducedContext";


import api from "../../api";
const ListCandidates = ({idVaga}:any) => {
  
  const { GetInReduced, listCandidates } = useContext<any>(GetReducedContext);
  const [page, setPage] = useState<number>(0);
 
  
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
    GetInReduced(page);
  }, []);

  useEffect(() => {
    GetInReduced(page);
  }, [page]);

  if (!listCandidates) {
    return <Loading />;
  }

  const { candidatos, totalDePaginas } = listCandidates;

  const nextPage = (actionPage: string) => {
    if (actionPage === "+" && page < totalDePaginas - 1) {
      setPage(page + 1);
    }
    if (actionPage === "-" && page > 0) {
      setPage(page - 1);
    }
  };
  function VincularCandidato( idCandidato:number ) {
    console.log('idVaga =>', idVaga);
    console.log('idCandidato =>', idCandidato);  
  }
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
              <C.InfoCandidato>
                <button onClick={()=>VincularCandidato(listCand.idCandidato)}>Vincular Candidato</button>
              </C.InfoCandidato>
            </C.ContainerInfoCandidato>
          </C.Li>
        ))}
      </C.Ul>
      <C.DivButtonsPage>
        <C.ButtonPage onClick={() => nextPage("-")}>
          {" "}
          <IoMdArrowRoundBack />{" "}
        </C.ButtonPage>

        <C.ButtonPage onClick={() => nextPage("+")}>
          <IoMdArrowRoundForward />{" "}
        </C.ButtonPage>
      </C.DivButtonsPage>
    </C.Nav>
  );
};

export default ListCandidates;
