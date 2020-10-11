//vendors
import React from 'react';

import { Route, withRouter } from 'react-router-dom';

//styles
import { AppContainer, SectionContent } from './App.styled';

//Components
import Header from '../components/header/header';
import Content from './content/content';
import BlankPage from './blank-page/blank-page';
import Footer from '../components/footer/footer';

export const App = () => {
  return (
    <AppContainer className="App">
      <Header />
      <section className="ajust-content text-white mt-6">
        <Route exact path="/" component={Content} />
        <Route exact path="/:pageName" component={BlankPage} />
      </section>
      <Footer />
    </AppContainer>
  );
};

export default withRouter(App);
