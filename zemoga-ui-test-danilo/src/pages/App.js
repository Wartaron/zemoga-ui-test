//vendors
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//styles
import { AppContainer, SectionContent } from './App.styled';

//Components
import Header from '../components/header/header';
import PrincipalContent from '../components/principal-content/principal-content';
import SecondaryContent from '../components/secondary-content/secondary-content';
import Footer from '../components/footer/footer';

//actions
import { getPersons } from '../actions/persons.actions';

const mapStateToProps = (state) => ({
  persons: state.personsReducer.data,
  principalPerson: state.personsReducer.principalPerson,
});

const mapDispatchToProps = (dispatch) => ({
  getPersons: bindActionCreators(getPersons, dispatch),
});

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, principalPerson } = this.props;

    return (
      <AppContainer className="App">
        <Header />
        <section className="ajust-content text-white mt-6">
          <div className="container mw-100 p-3">
            <PrincipalContent principalPerson={principalPerson} />
            <SectionContent className="mt-3">
              <SecondaryContent persons={persons} />
            </SectionContent>
          </div>
        </section>
        <Footer />
      </AppContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
