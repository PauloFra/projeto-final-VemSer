import { useEffect, useState } from "react";
import "../../components/globalStyles/global.modules.css";
import ModalList from "../../components/modal/ModalList";
import moment from "moment";
import api from "../../api";
import Loading from "../../components/loading/Loading";
import * as C from "../../components/globalStyles/global.styles";
import { VagasDTO } from "../../model/VagasDTO";
import Modal from "../formCandidato/experiencia/Modal";
import ExperienciaCandidato from "../formCandidato/experiencia/ExperienciaCandidato";
function Vagas() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [vagas, setVagas] = useState<VagasDTO["vagas"]>();

  async function getInVagas() {
    try {
      const { data } = await api.get("/vaga/get-vagas-compleo");
      setVagas(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
    getInVagas();
  }, []);

  if (!vagas) {
    return <Loading />;
  }

  return (
    <C.ContainerGeral>
      <C.DivMenu>
       <C.TitleH>Listagem de Vagas </C.TitleH>
      </C.DivMenu>
      {visibleModal && <ModalList onClose={() => setVisibleModal(false)} />}
      <C.TableCandidates>
        <C.TableHead>
          <C.TableTr>
            <C.TableTh>Titulo</C.TableTh>
            <C.TableTh>Cliente</C.TableTh>
            <C.TableTh>Status</C.TableTh>
            <C.TableTh>Responsavel</C.TableTh>
            <C.TableTh>estado</C.TableTh>
            <C.TableTh>data_abertura</C.TableTh>
            <C.TableTh>cidade</C.TableTh>
            <C.TableTh>analista</C.TableTh>
            {/* <C.TableTh>pcd</C.TableTh> */}
            <C.TableTh align={'center'}>Vincular Candidato</C.TableTh>
          </C.TableTr>
        </C.TableHead>
        <C.TableBody>
          {vagas.map((vaga) => (
            <C.TableTr key={vaga.id}>
              <C.TableTd>{vaga.titulo}</C.TableTd>
              <C.TableTd>{vaga.cliente}</C.TableTd>
              <C.TableTd>{vaga.status}</C.TableTd>
              <C.TableTd>{vaga.responsavel}</C.TableTd>
              <C.TableTd>{vaga.estado}</C.TableTd>
              <C.TableTd>
                {moment(vaga.dataAbertura, "YYYY-MM-DD").format("DD/MM/YYYY")}
              </C.TableTd>
              <C.TableTd>{vaga.cidade}</C.TableTd>
              <C.TableTd>{vaga.analista}</C.TableTd>
              {/* <C.TableTd>{vaga.pcd ? "Sim" : "Não"}</C.TableTd> */}
              <C.TableTd align={'center'}>
                <button onClick={() => setVisibleModal(true)}>Vincular</button>
              </C.TableTd>
            </C.TableTr>
          ))}
        </C.TableBody>
      </C.TableCandidates>
    </C.ContainerGeral>
  );
}

export default Vagas;
