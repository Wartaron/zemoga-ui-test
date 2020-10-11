import styled, { css } from 'styled-components';
import backgroundImage from '../assets/pope.jpg';

export const AppContainer = styled.div`
  text-align: center;
  background-image: url('${backgroundImage}');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0 200px;
`;

export const SectionContent = styled.div`
  background-color: #fff;
`;
