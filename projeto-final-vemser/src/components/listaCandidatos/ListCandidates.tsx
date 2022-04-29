import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./ListCandidates.styles";
import { useContext } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { IdType } from "../../model/TypeIds";
import Loading from "../loading/Loading";
import { GetReducedContext } from "../../context/GetReducedContext";
import Notiflix from "notiflix";


import api from "../../api";
const ListCandidates = ({idVaga}:any) => {
  
  const { GetInReduced, listCandidates } = useContext<any>(GetReducedContext);
  const [page, setPage] = useState<number>(0);
 
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
      GetInReduced(page , 9);
    } 
  }, []);

  useEffect(() => {
    GetInReduced(page ,9);
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
  async function VincularCandidato( idCandidato:number ) {
      try{
      const {data} = await api.post(`/vaga/vincular-candidato?idCandidato=${idCandidato}&idVaga=${idVaga}`);
      Notiflix.Notify.success('Candidato Vinculado');
      }
    catch(error){
      console.log(error);
    }
    console.log('idVaga =>', idVaga);
    console.log('idCandidato =>', idCandidato);  
  }
  return (
    <C.BackGroundTabela>
      
      {/* <C.Ul>
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
      </C.Ul> */}
    <C.Tabela>
          <C.TheadTabela>
            <C.TrTabela>
              <C.ThTabela radius="10px 0 0 0">Nome</C.ThTabela>
              <C.ThTabela> Data de Nascimento</C.ThTabela>
              <C.ThTabela>Cargo</C.ThTabela>
              <C.ThTabela>Senioridade</C.ThTabela>
              <C.ThTabela radius=" 0 10px 0 0 " align={"center"}> 
                 Vincular Candidato
              </C.ThTabela>
            </C.TrTabela>
          </C.TheadTabela>
          <C.TBodyTable>
          {/*  */}
          {candidatos.map((listCand: any) => (
            <C.TrTabela key={listCand.idCandidato}>
              <C.TdTabela>
                {listCand.nome}
              </C.TdTabela>
              <C.TdTabela>
                {listCand.dataNascimento}
              </C.TdTabela>
              <C.TdTabela>
              {listCand.cargo}
              </C.TdTabela>
                <C.TdTabela>
                {listCand.senioridade}
                </C.TdTabela>
              <C.TdTabela align={"center"}>
              <C.ButtonVisualizar  onClick={()=>VincularCandidato(listCand.idCandidato)}>
                Vincular
              </C.ButtonVisualizar>
              </C.TdTabela>
            </C.TrTabela>
            ))}
            </C.TBodyTable>
            </C.Tabela>
            <C.ContainerButtonsPage>
            <button onClick={() => nextPage("-")}>
              <IoMdArrowRoundBack />
            </button>
            <C.SpanDefault> Página:{page + 1}</C.SpanDefault>

            <button onClick={() => nextPage("+")}>
              <IoMdArrowRoundForward />
            </button>
          </C.ContainerButtonsPage>
    </C.BackGroundTabela>
      /* <C.Ul>
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
                </C.InfoCandidato>
            </C.ContainerInfoCandidato>
          </C.Li>
        ))}
      </C.Ul> */
      
      /* <C.DivButtonsPage>
        <C.ButtonPage onClick={() => nextPage("-")}>
          {" "}
          <IoMdArrowRoundBack />{" "}
        </C.ButtonPage>

        <C.ButtonPage onClick={() => nextPage("+")}>
          <IoMdArrowRoundForward />{" "}
        </C.ButtonPage>
      </C.DivButtonsPage> */
 
  );
};

export default ListCandidates;
