import ListCandidates from "../listaCandidatos/ListCandidates";
import * as C from "./ModalList.styles";
type modalListProps = {
  onClose: Function;
  id?: string;
  idVaga: number | undefined;
};
const ModalList = ({
  onClose = () => {},
  id = "modal",
  idVaga,
}: modalListProps) => {
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
          <ListCandidates idVaga={idVaga} /* propsClick={onClose} */ />
        </C.ContentModal>
      </C.ContainerModal>
    </C.Modal>
  );
};

export default ModalList;
