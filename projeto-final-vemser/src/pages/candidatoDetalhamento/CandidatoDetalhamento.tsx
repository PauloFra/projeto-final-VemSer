import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import { PrepareDataFromGet } from "../../utils";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
type Props = {
  candidato: any;
  fecharMenu: Function;
};
type PropsMap = {
  dataFim: string;
  dataInicio: string;
  descricao: string;
  idExperiencia: number;
  nomeEmpresa: string;
};

const CandidatoDetalhamento = ({ candidato, fecharMenu }: Props) => {
  const [mapCandidato, setMapCandidato] = useState();
  console.log(candidato.cidade);
  console.log(candidato.experiencias);

  return (
    <div>
      <ul>
        <li key={candidato.idCandidato}>
          <div>
            <h3>Dados Pessoais</h3>
            <Link to={`/form-curriculo/${candidato.idCandidato}`}>
              <strong>Atualizar Candidato</strong>
            </Link>
            <p>Nome: {candidato.nome}</p>
            <p>Data de Nascimento: {candidato.dataNascimento}</p>
            <p>CPF: {candidato.cpf}</p>
            <p>Telefone: {candidato.telefone}</p>
            <h3>Endereço</h3>
            <p>Cidade: {candidato.cidade}</p>
            <p>Bairro: {candidato.bairro}</p>
            <p>Rua: {candidato.logradouro}</p>
            <p>Número: {candidato.numero}</p>
            <h3>Experiência Profissional</h3>

            {/*  {candidato.experiencias.map((experiencia: PropsMap) => (
              <div key={experiencia.idExperiencia}>
                <p>{experiencia.nomeEmpresa}</p>
                <p>{experiencia.dataInicio}</p>
                <p>{experiencia.dataFim}</p>
                <p>{experiencia.descricao}</p>
                <p>{experiencia.descricao}</p>
              </div>
            ))} */}

            <p>Senioridade: {candidato.senioridade}</p>
            <button onClick={() => fecharMenu(false)}>fechar</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CandidatoDetalhamento;
