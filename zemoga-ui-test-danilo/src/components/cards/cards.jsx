import React, { Component } from 'react';
import Card from '../card/card';
import { getTranslation } from '../../utils/translationsUtils';

export class Cards extends Component {
  render() {
    const { persons } = this.props;

    return (
      <>
        {getTranslation('voting', 'votes')}
        <div className="row">
          {persons.map((person, index) => {
            return (
              <div className="col-6 mb-4">
                <Card person={person} key={index} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Cards;
