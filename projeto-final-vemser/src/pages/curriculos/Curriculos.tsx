import { Link } from "react-router-dom";

import * as C from './curriculos.styles'
import api from "../../api";
import ListCandidatesTable from "../../components/ListCandidatesTable/ListCandidatesTable";
import { useEffect } from "react";
function Curriculos() {

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      api.defaults.headers.common['Authorization'] = token
    }
  },[])
  return (
    <C.ContainerGeral>
      <C.DivMenu>
      <h1>Listagem de curriculos </h1>
      <h3>
        <Link to="/form-curriculo">Criar Candidato</Link>
      </h3>
      </C.DivMenu>
      <ListCandidatesTable />
      </C.ContainerGeral>

  );
}

export default Curriculos;
