import React from "react";
import { Link } from "react-router-dom";
import * as C from "./ListCandidates.styles";
import listCandidatos from "../../candidatoReduced.json";
const ListCandidates = () => {
  const { candidatoReduced } = listCandidatos;

  return (
    <C.Nav>
        <h1>Lista Candidatos</h1>
      <C.Ul>
        {candidatoReduced.map((listCand: any) => (
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
    </C.Nav>
  );
};

export default ListCandidates;
