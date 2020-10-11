import styled, { css } from 'styled-components';

export const ThumbsContainer = styled.div`
  display: flex;
  height: 40px;
`;

export const SharedStyledThumbs = css`
  text-align: left;
  padding-left: 15px;
  padding-top: 10px;
`;

export const ThumbsUp = styled.div`
  ${SharedStyledThumbs}
  width: ${(props) => props.width}%;
  background-color: rgba(41, 183, 176, 0.4);
`;

export const ThumbsDown = styled.div`
  ${SharedStyledThumbs}
  width: ${(props) => props.width}%;
  background-color: rgba(254, 180, 51, 0.4);
`;
