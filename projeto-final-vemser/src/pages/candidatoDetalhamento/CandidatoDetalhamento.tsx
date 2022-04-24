import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import { Link } from 'react-router-dom'
type Props = {
  candidato: string[] | number[];
  fecharMenu: Function;
};
/* type PropsMap = {
  bairro?: string | undefined;
  cargo?: string | undefined;
  cidade?: string | undefined;
  cpf?: string | undefined;
  dataNascimento?: string | undefined;
  idCandidato?: number | undefined;
  logradouro?: string | undefined;
  nome?: string | undefined;
  numero?: number | undefined;
  senioridade?: string | undefined;
  telefone?: string | undefined;
};
 */
const CandidatoDetalhamento = ({ candidato, fecharMenu }: Props) => {
  console.log(candidato);

  return (
    
    <div>
      <ul>
        {candidato.map(
          ({
            idCandidato,
            nome,
            dataNascimento,
            cpf,
            cidade,
            bairro,
            logradouro,
            numero,
            telefone,
            senioridade,
          }: any) => (
            <li key={idCandidato}>
              <div>
                <h3>Dados Pessoais</h3>
                <Link to={`/form-curriculo/${idCandidato}`}><strong>Atualizar Candidato</strong></Link>
                <p>Nome: {nome}</p>
                <p>Data de Nascimento: {dataNascimento}</p>
                <p>CPF: {cpf}</p>
                <p>Telefone: {telefone}</p>
                <h3>Endereço</h3>
                <p>Cidade: {cidade}</p>
                <p>Bairro: {bairro}</p>
                <p>Rua: {logradouro}</p>
                <p>Número: {numero}</p>
                <h3>Experiência Profissional</h3>
                <p>Senioridade: {senioridade}</p>
                <button onClick={() => fecharMenu(false)}>fechar</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CandidatoDetalhamento;
