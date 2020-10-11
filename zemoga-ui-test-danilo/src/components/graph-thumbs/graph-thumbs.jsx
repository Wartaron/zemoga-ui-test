import React, { Component } from 'react';
import { ThumbsUp, ThumbsDown, ThumbsContainer } from './graph-thumbs.styled';

export class GraphThumbs extends Component {
  calculatePercentage = () => {
    const { thumbsDown, thumbsUp } = this.props;

    const total = thumbsDown + thumbsUp;
    const percentageDown = Math.ceil((thumbsDown / total) * 100);
    const percentageUp = Math.floor((thumbsUp / total) * 100);

    return {
      percentageDown,
      percentageUp,
    };
  };

  render() {
    const { percentageDown, percentageUp } = this.calculatePercentage();

    return (
      <ThumbsContainer>
        {!!percentageUp && (
          <ThumbsUp width={percentageUp}>👍 {percentageUp}%</ThumbsUp>
        )}
        {!!percentageDown && (
          <ThumbsDown width={percentageDown}>👎 {percentageDown}%</ThumbsDown>
        )}
      </ThumbsContainer>
    );
  }
}

export default GraphThumbs;
