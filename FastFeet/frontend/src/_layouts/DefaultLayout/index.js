import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '~/components/Navbar';
import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
