import styled from "styled-components";

export const DivContainerDetail = styled.div`
  border-radius: 10px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  min-width: 490px;
  align-items: start;
 
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 24px 17px 34px 4px #ababab;
  box-shadow: 0px 10px 13px -7px #000000, 24px 17px 34px 4px #ababab;
`;
export const DivFlex = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background-color: #f1f3f4;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonClose = styled.button`
  font-size: 30px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const ButtonAsLink = styled.button`
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  font-size: 15px;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  background-color: #3636ba;
  border: 1px solid rgb(159, 162, 180);

  :hover {
    border-radius: 0 20px 0 20px;
    background-color: #1e1ead;
  }
`;

export const DivBtn = styled.div`
  padding: 15px 30px;
  width: 100%;
`;
