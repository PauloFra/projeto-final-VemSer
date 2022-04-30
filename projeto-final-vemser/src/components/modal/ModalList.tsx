import ListCandidates from "../listaCandidatos/ListCandidates";


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
       
        <C.ContentModal>
          <ListCandidates idVaga={idVaga} propsClick={onClose} />
        </C.ContentModal>
      </C.ContainerModal>
    </C.Modal>
  );
};

export default ModalList;
