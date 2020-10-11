import React from 'react';

//utils
import { getTranslation } from '../../utils/translationsUtils';

//styled components
import {
  MessageContainer,
  TitleContainer,
  DescriptionContainer,
} from './message.styled';

export const Message = (props) => {
  const { handleOnClose } = props;

  return (
    <MessageContainer className="row text-secondary">
      <TitleContainer className="col-3">
        <span>{getTranslation('message', 'subtitle1')}</span>{' '}
        <span>{getTranslation('message', 'subtitle2')}</span>{' '}
        <span className="title-text">{getTranslation('message', 'title')}</span>
      </TitleContainer>
      <DescriptionContainer className="col-9">
        <div className="row">
          <div className="col-11">
            <span>{getTranslation('message', 'description')}</span>
          </div>
          <div className="col-1 align-middle">
            <i onClick={handleOnClose}>X</i>
          </div>
        </div>
      </DescriptionContainer>
    </MessageContainer>
  );
};

export default Message;
