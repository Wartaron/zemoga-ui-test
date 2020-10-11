import React, { Component } from 'react';
import Card from '../card/card';
import { getTranslation } from '../../utils/translationsUtils';
import { Title } from './cards.styled';

export class Cards extends Component {
  render() {
    const { persons, setThumbsCalification } = this.props;

    return (
      <>
        <Title className="text-dark">{getTranslation('voting', 'votes')}</Title>
        <div className="row">
          {persons.map((person, index) => {
            return (
              <div className="col-6 mb-4">
                <Card
                  person={person}
                  key={index}
                  setThumbsCalification={setThumbsCalification}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Cards;
