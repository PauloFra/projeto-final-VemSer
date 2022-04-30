import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  padding:  0 250px;
  height: 109vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const ContainerModal = styled.div`
  background-color: #fff;
  min-width: 900px;
  min-height: 600px;
  color: #000;
  border-radius: 8px;
`;

export const CloseModal = styled.button`
  background-color: transparent;
  outline: none;
  width: 32px;
  height: 32px;
  right:calc(-100% + 30px);
  top: 8px;
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  border: none;
  :before,
  :after {
    content: " ";
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #000;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

export const ContentModal = styled.div`

  

`
