import { useState } from "react";
import * as C from "./Modal.styles";

export default ({ status, setStatus, children }: any) => {
  const handleModalClick = () => {
    setStatus(false);
  };
  return (
    <C.Modal status={status}>
      <C.ContainerModal>
        <C.ContentModal>{children}</C.ContentModal>
        <C.CloseModal onClick={() => handleModalClick()}></C.CloseModal>
      </C.ContainerModal>
    </C.Modal>
  );
};
