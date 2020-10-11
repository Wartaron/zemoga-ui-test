//vendors
import React, { useState } from 'react';

//styled components
import {
  StyledThumnbsDown,
  StyledThumbsContainer,
  StyledThumnbsUp,
  StyledThumbsButtons,
  StyledThumbUpButton,
  StyledThumbDownButton,
  StyledVoteNowButton,
} from './thumbs-component.styled';

//utils
import { getTranslation } from '../../utils/translationsUtils';

//constants
import {
  THUMBS_V1,
  THUMBS_V2,
} from '../../constants/thumbs-component.constants.json';

export const ThumbsComponent = (props) => {
  const [voted, setVoted] = useState(false);
  const [isPositive, setPositive] = useState(true);
  const [selectedButton, setSelectedButton] = useState('1');
  const { thumbsType, onClickThumbs } = props;

  switch (thumbsType) {
    case THUMBS_V1:
      return (
        <StyledThumbsContainer className="row">
          <StyledThumnbsUp className="col-6">👍</StyledThumnbsUp>
          <StyledThumnbsDown className="col-6">👎</StyledThumnbsDown>
        </StyledThumbsContainer>
      );
    case THUMBS_V2:
      return (
        <StyledThumbsButtons>
          {!voted && (
            <>
              <StyledThumbUpButton
                className={selectedButton === '1' ? 'selected' : ''}
                onClick={() => {
                  setSelectedButton('1');
                  setPositive(true);
                }}
              >
                👍
              </StyledThumbUpButton>
              <StyledThumbDownButton
                className={selectedButton === '2' ? 'selected' : ''}
                onClick={() => {
                  setSelectedButton('2');
                  setPositive(false);
                }}
              >
                👎
              </StyledThumbDownButton>
            </>
          )}
          {!voted ? (
            <StyledVoteNowButton
              onClick={() => {
                onClickThumbs(isPositive);
                setVoted(true);
              }}
            >
              {getTranslation('voting', 'now')}
            </StyledVoteNowButton>
          ) : (
            <StyledVoteNowButton
              onClick={() => {
                setVoted(false);
              }}
            >
              {getTranslation('voting', 'again')}
            </StyledVoteNowButton>
          )}
        </StyledThumbsButtons>
      );
  }
};

export default ThumbsComponent;
