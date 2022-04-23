import { Link } from "react-router-dom";
import ListCandidates from "../../components/listaCandidatos/ListCandidates";

function Curriculos() {
  return (
    <div>
      <h1>Listagem de curriculos</h1>
      <h3>
        <Link to="/form-curriculo">Criar Candidato</Link>
      </h3>
      <ListCandidates />
      
    </div>
  );
}

export default Curriculos;
