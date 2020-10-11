import styled, { css } from 'styled-components';

export const ThumbsUp = styled.div`
  width: ${(props) => props.width}%;
  background-color: green;
`;

export const ThumbsDown = styled.div`
  width: ${(props) => props.width}%;
  background-color: red;
`;

export const ThumbsContainer = styled.div`
  display: flex;
`;
