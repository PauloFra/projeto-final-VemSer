import styled from "styled-components";
import Theme from "../../theme/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 65px);
  width: 100vw;
`;
export const Info = styled.div`
  margin-top: ${Theme.space.default};
  font-size: ${Theme.fontSize.large};
  a {
    color: ${Theme.fontColor.primary};
  }
`;

export const GifError = styled.img`
  height: 40%;
`;

export const P = styled.p`
  color: ${Theme.fontColor.primary};
`;
