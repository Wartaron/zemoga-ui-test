import styled, { css } from 'styled-components';

export const StyledThumnbsUp = styled.div`
  background-color: rgba(41, 183, 176, 0.4);
`;

export const StyledThumnbsDown = styled.div`
  background-color: rgba(254, 180, 51, 0.4);
`;

export const StyledThumbsContainer = styled.div`
  margin-left: 0;
  margin-right: 0;
  height: auto;
`;

export const StyledThumbsButtons = styled.div`
  left: 0;
  display: flex;

  & > button {
    margin-right: 20px;
  }
`;
