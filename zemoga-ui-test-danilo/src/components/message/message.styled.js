import styled, { css } from 'styled-components';

export const MessageContainer = styled.div`
  margin-left: 0;
  margin-right: 0;
  background-color: rgba(235, 235, 235, 1);
  align-items: center;
  padding: 10px;
`;

export const TitleContainer = styled.div`
  font-size: 18px;

  .title-text {
    font-size: 28px;
    display: block;
    font-weight: 500;
  }
`;

export const DescriptionContainer = styled.div`
  font-size: 12px;
  text-align: left;
`;
