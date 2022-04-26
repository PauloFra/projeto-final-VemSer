import {  useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'

import * as C from './candidatoDetalhado.styles'
import { Link, useNavigate } from "react-router-dom";
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

  
  const navigate = useNavigate()

  function NavigateById(id:number){
    navigate(`/form-curriculo/${id}`)
  }
  console.log('candidato =>' , candidato);
  
  return (
    <C.DivContainerDetail>
      <C.DivFlex>
        <h2>Detalhes do Candidato</h2>
        <C.ButtonClose onClick={() => fecharMenu(false)}><AiOutlineClose /></C.ButtonClose >
      </C.DivFlex>
          <C.DivInfo>
            <h3>Dados Pessoais</h3>
            
            <p>Nome: {candidato.nome}</p>
            <p>Data de Nascimento: {candidato.dataNascimento}</p>
            <p>CPF: {candidato.cpf}</p>
            <p>Senioridade: {candidato.senioridade}</p>
            <p>Telefone: {candidato.telefone}</p>
            <h3>Endereço</h3>
            <p>Cidade: {candidato.cidade}</p>
            <p>Bairro: {candidato.bairro}</p>
            <p>Rua: {candidato.logradouro}</p>
            <p>Número: {candidato.numero}</p>
            
          </C.DivInfo >        
        <C.DivBtn>
              <C.ButtonAsLink onClick={() => NavigateById(candidato.idCandidato)}>Atualizar Candidato</C.ButtonAsLink>
        </C.DivBtn>
    </C.DivContainerDetail>
  );
};

export default CandidatoDetalhamento;
