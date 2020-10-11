import React, { Component } from 'react';
import Message from '../message/message';
import { SecondaryContentContainer } from './secondary-content.styled';

import { Cards } from '../cards/cards';

class SecondaryContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMessageOpen: true,
    };
  }

  render() {
    const { persons, setThumbsCalification } = this.props;
    const { isMessageOpen } = this.state;

    return (
      <SecondaryContentContainer className="mt-5">
        {isMessageOpen && (
          <Message
            handleOnClose={() => {
              this.setState((state) => ({
                isMessageOpen: !state.isMessageOpen,
              }));
            }}
          />
        )}
        <Cards
          persons={persons}
          setThumbsCalification={setThumbsCalification}
        />
      </SecondaryContentContainer>
    );
  }
}

export default SecondaryContent;
