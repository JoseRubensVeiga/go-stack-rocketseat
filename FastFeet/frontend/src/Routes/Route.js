import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/_layouts/AuthLayout';
import DefaultLayout from '~/_layouts/DefaultLayout';

export default function RouteWrapper({ isPrivate, path, ...rest }) {
  const signed = useSelector((state) => state.auth.signed);

  if (signed && path === '/') {
    return <Redirect to="/deliveries" />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Layout>
      <Route path={path} {...rest} />
    </Layout>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
