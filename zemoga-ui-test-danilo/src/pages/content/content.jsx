import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PrincipalContent from '../../components/principal-content/principal-content';
import SecondaryContent from '../../components/secondary-content/secondary-content';

import { SectionContent } from '../App.styled';

//actions
import {
  getPersons,
  setThumbsCalification,
} from '../../actions/persons.actions';

const mapStateToProps = (state) => ({
  persons: state.personsReducer.data,
  principalPerson: state.personsReducer.principalPerson,
});

const mapDispatchToProps = (dispatch) => ({
  getPersons: bindActionCreators(getPersons, dispatch),
  setThumbsCalification: bindActionCreators(setThumbsCalification, dispatch),
});

export class Content extends React.Component {
  componentDidMount() {
    const { getPersons } = this.props;

    getPersons();
  }

  render() {
    const { principalPerson, setThumbsCalification, persons } = this.props;

    return (
      <div className="container mw-100 p-3">
        <PrincipalContent principalPerson={principalPerson} />
        <SectionContent className="mt-3">
          <SecondaryContent
            persons={persons}
            setThumbsCalification={setThumbsCalification}
          />
        </SectionContent>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
