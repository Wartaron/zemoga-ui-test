import styled, { css } from 'styled-components';

export const StyledThumbsContainer = styled.div`
  height: 50px;
  margin-bottom: -50px;
  margin-top: 0;
  margin-left: -30px;
  margin-right: -30px;
`;

export const SharedStyledThumbs = css`
  padding-top: 5px;
  font-size: 25px;
`;

export const StyledThumnbsUp = styled.div`
  ${SharedStyledThumbs}
  background-color: rgba(41, 183, 176, 0.4);
`;

export const StyledThumnbsDown = styled.div`
  ${SharedStyledThumbs}
  background-color: rgba(254, 180, 51, 0.4);
`;

export const StyledThumbsButtons = styled.div`
  left: 0;
  display: flex;

  & > button {
    margin-right: 20px;
  }
`;

export const SharedButtonsStyle = css`
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &.selected {
    border: solid 2px white;
  }

  &:hover {
    border: solid 2px white;
  }
`;

export const StyledThumbUpButton = styled.button`
  ${SharedButtonsStyle}
  background-color: rgba(41, 183, 176, 0.4);
`;

export const StyledThumbDownButton = styled.button`
  ${SharedButtonsStyle}
  background-color: rgba(254, 180, 51, 0.4);
`;

export const StyledVoteNowButton = styled.button`
  ${SharedButtonsStyle}
  background-color: Transparent;
  border: solid 2px white;

  &:hover {
    background: white;
    color: black;
  }
`;
