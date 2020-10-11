import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
  position: relative;
  font-size: 14px;
  display: flex;
  flex: auto;

  & > a {
    margin-right: 20px;
  }
`;

export const StyledRightSection = styled.div`
  position: relative;
  display: flex;
  flex: auto;
  justify-content: flex-end;

  & > a {
    margin-right: 20px;
  }
`;
