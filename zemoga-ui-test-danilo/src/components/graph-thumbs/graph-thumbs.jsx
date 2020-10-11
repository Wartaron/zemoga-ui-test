import React, { Component } from 'react';
import { ThumbsUp, ThumbsDown, ThumbsContainer } from './graph-thumbs.styled';

export class GraphThumbs extends Component {
  calculatePercentage = () => {
    const { thumbsDown, thumbsUp } = this.props;

    const total = thumbsDown + thumbsUp;
    const percentageDown = (thumbsDown / total) * 100;
    const percentageUp = (thumbsUp / total) * 100;

    return {
      percentageDown,
      percentageUp,
    };
  };

  render() {
    const { thumbsUp, thumbsDown } = this.props;
    const { percentageDown, percentageUp } = this.calculatePercentage();

    return (
      <ThumbsContainer>
        <ThumbsUp width={percentageUp}>👍</ThumbsUp>
        <ThumbsDown width={percentageDown}>👎</ThumbsDown>
      </ThumbsContainer>
    );
  }
}

export default GraphThumbs;
