//vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//styled components
import {
  CardDescription,
  CardTitle,
  PreTextOnPrincipalCard,
  StyledCard,
  StyledContainer,
  StyledInformationContainer,
} from './card.styled';

//components
import GraphThumbs from '../graph-thumbs/graph-thumbs';
import ThumbsComponent from '../thumbs-component/thumbs-component';

//actions
import { setThumbsCalification } from '../../actions/persons.actions';

//utils
import { getTranslation } from '../../utils/translationsUtils';

//constants
import {
  THUMBS_V1,
  THUMBS_V2,
} from '../../constants/thumbs-component.constants.json';

export class Card extends Component {
  handleClickThumbs = (isPositive) => {
    const {
      setThumbsCalification,
      person: { id },
    } = this.props;

    setThumbsCalification({ personId: id, isPositive });
  };

  render() {
    const {
      person: { thumbsDown, thumbsUp, name, description, reference, image },
      isPrincipal,
    } = this.props;
    const titleName = `${name}${isPrincipal ? '?' : ''}`;

    return (
      <StyledContainer isPrincipal={isPrincipal} image={image}>
        <StyledInformationContainer>
          <StyledCard>
            {isPrincipal && (
              <PreTextOnPrincipalCard>
                {getTranslation('card', 'preTextOnTitle')}
              </PreTextOnPrincipalCard>
            )}
            <CardTitle>{titleName}</CardTitle>
            <CardDescription>{description}</CardDescription>
            {isPrincipal && (
              <a href={reference} target="_blank">
                {getTranslation('card', 'moreInformation')}
              </a>
            )}
          </StyledCard>
          <div className="mt-3">
            <ThumbsComponent
              thumbsType={isPrincipal ? THUMBS_V1 : THUMBS_V2}
              onClickThumbs={this.handleClickThumbs}
            />
          </div>
        </StyledInformationContainer>
        {!isPrincipal && (
          <GraphThumbs thumbsDown={thumbsDown} thumbsUp={thumbsUp} />
        )}
      </StyledContainer>
    );
  }
}

export default Card;
