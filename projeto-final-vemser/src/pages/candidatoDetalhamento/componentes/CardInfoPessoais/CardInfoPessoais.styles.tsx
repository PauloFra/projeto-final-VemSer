import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  padding: 10px 0px;
  border-bottom: 2px solid #ccc;
  svg {
    width: 50px;
    height: 50px;
    color: #ccc;
  }
`;
export const DownloadCV = styled.a`
  cursor: pointer;
  color: #444444;
  display: flex;
  column-gap: 5px;
  align-items: center;
  small:hover {
    border-bottom: 1px solid rgb(68, 68, 68, 0.5);
  }
  svg {
    color: #444444;
    width: 18px;
    height: 18px;
  }
`;
export const DownloadText = styled.small``;
