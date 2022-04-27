import styled from "styled-components";
export const DivContainerDetail = styled.div`
  margin: 0px 10px 10px 20px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  min-height: 450px;
  min-width: 350px;
  align-items: start;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 24px 17px 34px 4px #ababab;
  box-shadow: 0px 10px 13px -7px #000000, 24px 17px 34px 4px #ababab;
  transition: 1s;
`;
export const DivFlex = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f1f3f4;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonClose = styled.button`
  font-size: 30px;
  cursor: pointer;
  border: none;
 
`;

export const ButtonAsLink = styled.button`
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  font-size: 15px;
  color: white;
  cursor: pointer;
  transition: 0.5s;
    background-color: #6c788e;
  border: 1px solid rgb(159, 162, 180);

  :hover {
    background-color: rgb(108, 120, 142, 0.9);
  }
`;

export const DivBtn = styled.div`
  padding: 15px 30px;
  width: 100%;
`;
