//vendors
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//utils
import { getTranslation } from '../../utils/translationsUtils';

//styled components
import {
  TitleHeader,
  RightNav,
  StyledLink,
  StyledHeader,
} from './header.styled';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <nav
          className="navbar navbar-expand-lg "
          aria-labelledby="mainmenulabel"
        >
          <TitleHeader id="mainmenulabel">
            {getTranslation('title')}
          </TitleHeader>
          <Link to="#" className="navbar-brand text-white" aria-current="page">
            {getTranslation('title')}
          </Link>
          <RightNav
            className="navbar-nav mr-2 mt-2 mt-lg-0"
            aria-labelledby="secondarymenulabel"
          >
            <Link to="#" className="pl-2 text-white" aria-current="page">
              {getTranslation('header', 'menuOption1')}
            </Link>
            <Link to="#" className="pl-2 text-white" aria-current="page">
              {getTranslation('header', 'menuOption2')}
            </Link>
            <Link to="#" className="pl-2 text-white" aria-current="page">
              {getTranslation('header', 'menuOption3')}
            </Link>
            <Link to="#" className="pl-2 text-white" aria-current="page">
              {getTranslation('header', 'menuOption4')}
            </Link>
          </RightNav>
        </nav>
      </StyledHeader>
    );
  }
}

export default Header;
