import styled from "styled-components";
import Theme from "../../theme/Theme";

export const Footer = styled.footer`
  display: flex;
  height: 50px;
  align-items: center;
  background-color: ${Theme.color.primary};
  justify-content: center;
  color: ${Theme.fontColor.secondary};
`;
