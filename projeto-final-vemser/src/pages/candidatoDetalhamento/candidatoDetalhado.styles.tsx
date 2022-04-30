import styled from "styled-components";
import Theme from "../../theme/Theme";
export const DivContainerDetail = styled.div`
  margin-left: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 701px;
  min-width: 600px;
  align-items: start;
  border-right: 2px solid #ccc;
  border-left: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  box-shadow: ${Theme.shadow.container};
`;
export const DivFlex = styled.div`
  display: flex;
  padding: 0px 10px;
  border: none !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.color.primary};

  height: 80px;
`;
export const Title = styled.h2`
  color: ${Theme.color.secondary};
`;
export const ButtonClose = styled.button`
  font-size: 30px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${Theme.color.secondary};
  :hover {
    color: ${Theme.color.hover};
  }
`;

export const ButtonAsLink = styled.button`
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  font-size: 15px;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${Theme.color.primary};
  border: 1px solid rgb(159, 162, 180);

  :hover {
    background-color: ${Theme.color.hover};
  }
`;

export const DivBtn = styled.div`
  padding: 15px 30px;
  width: 100%;
`;
