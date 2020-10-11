import React from 'react';
import { Link } from 'react-router-dom';
//utils
import { getTranslation } from '../../utils/translationsUtils';

//styled components
import { StyledNav, StyledRightSection } from './footer.styled';

export const Footer = (props) => {
  return (
    <footer className="footer">
      <StyledNav
        className="navbar navbar-expand-lg navbar-nav mr-2 mt-2 mt-lg-0"
        aria-labelledby="secondarymenulabel"
      >
        <Link to="#" className="pl-2 text-secondary" aria-current="page">
          {getTranslation('footer', 'footerOption1')}
        </Link>
        <Link to="#" className="pl-2 text-secondary" aria-current="page">
          {getTranslation('footer', 'footerOption2')}
        </Link>
        <Link to="#" className="pl-2 text-secondary" aria-current="page">
          {getTranslation('footer', 'footerOption3')}
        </Link>
        <StyledRightSection>
          <Link to="#" className="pl-2 text-secondary" aria-current="page">
            {getTranslation('footer', 'footerOption4')}
          </Link>
          <Link to="#" className="pl-2 text-secondary" aria-current="page">
            {getTranslation('footer', 'footerOption5')}
          </Link>
        </StyledRightSection>
      </StyledNav>
    </footer>
  );
};

export default Footer;
