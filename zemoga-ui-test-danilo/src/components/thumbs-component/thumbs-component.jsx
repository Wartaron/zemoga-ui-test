//vendors
import React from 'react';

//styled components
import {
  StyledThumnbsDown,
  StyledThumbsContainer,
  StyledThumnbsUp,
  StyledThumbsButtons,
} from './thumbs-component.styled';

//constants
import {
  THUMBS_V1,
  THUMBS_V2,
} from '../../constants/thumbs-component.constants.json';

export const ThumbsComponent = (props) => {
  const { thumbsType } = props;

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
          <button>👍</button>
          <button>👎</button>
          <button>Vote now</button>
        </StyledThumbsButtons>
      );
  }
};

export default ThumbsComponent;
