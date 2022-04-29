import ListCandidates from "../listaCandidatos/ListCandidates";
import {IoMdClose} from 'react-icons/io'

import * as C from "./ModalList.styles";
const ModalList = (  { onClose = () => {}, id = "modal" , idVaga }:any ) => {
  const handleModalClick = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  // const { idVaga } = idVaga
  
  return (
    <C.Modal id={id} onClick={handleModalClick}>
      <C.ContainerModal>
       <C.MenuHeader>
        <h1>Lista Candidatos</h1>
        <C.ButtonClose onClick={() => onClose()}><IoMdClose /></C.ButtonClose>
       </C.MenuHeader>
        <C.ContentModal>
          <ListCandidates idVaga={idVaga} />
        </C.ContentModal>
      </C.ContainerModal>
    </C.Modal>
  );
};

export default ModalList;
