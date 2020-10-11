import styled, { css } from 'styled-components';

export const TitleHeader = styled.h1`
  display: none;
`;

export const StyledHeader = styled.header`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7252277620032388) 0%,
    rgba(0, 0, 0, 0) 77%,
    rgba(0, 0, 0, 0) 84%
  );
`;

export const RightNav = styled.nav`
  display: flex;
  flex: auto;
  justify-content: flex-end;

  & > a {
    margin-right: 20px;
  }
`;
