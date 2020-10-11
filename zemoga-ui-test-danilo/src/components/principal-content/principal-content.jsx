import React, { Component } from 'react';
import Card from '../card/card';

class PrincipalContent extends Component {
  render() {
    const { principalPerson } = this.props;

    return (
      <div className="row">
        <div className="col-6">
          <Card isPrincipal person={principalPerson} />
        </div>
      </div>
    );
  }
}

export default PrincipalContent;
