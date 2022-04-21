import ListCandidates from "../listaCandidatos/ListCandidates";
import * as C from "./ModalList.styles";
const ModalList = ({ onClose = () => {}, id = "modal" }) => {
  const handleModalClick = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  return (
    <C.Modal id={id} onClick={handleModalClick}>
      <C.ContainerModal>
        <C.CloseModal onClick={() => onClose()}></C.CloseModal>
        <C.ContentModal>
          <ListCandidates />
        </C.ContentModal>
      </C.ContainerModal>
    </C.Modal>
  );
};

export default ModalList;
