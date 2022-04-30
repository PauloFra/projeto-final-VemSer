import styled from "styled-components";
import Theme from "../../theme/Theme";
export const ContainerHeader = styled.header`
  background-color: #922c88;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  height: 65px;
  color: ${Theme.fontColor.secondary};
`;
export const Ulflex = styled.ul`
  column-gap: 20px;
  display: flex;
`;
export const Nav = styled.nav`
  display: flex;
  column-gap: 40px;
  align-items: center;
`;

export const Li = styled.li`
  font-size: 18px;
  a {
    font-size: 18px;

    color: ${Theme.fontColor.secondary};
    :hover {
      color: rgb(44, 44, 44, 0.8);
    }
  }
`;
export const ButtonLogout = styled.button`
  background-color: transparent;
  border: none;
  transition: 1s;
  font-size: 17px;
  display: flex;
  align-items: center;
  color: ${Theme.fontColor.secondary};
  cursor: pointer;
  svg {
    font-size: 24px;
  }
`;
export const Logout = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
