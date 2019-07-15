import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import './PageLayout.scss';

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1><b>Client Dashboard</b></h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/registration' activeClassName='page-layout__nav-item--active'>Registration</Link>
    {' · '}
    <Link to='/tax' activeClassName='page-layout__nav-item--active'>Create Tax</Link>
    {' · '}
    <Link to='/invoice' activeClassName='page-layout__nav-item--active'>Generate Invoice</Link>
    {' · '}
    <Link to='/dashboard' activeClassName='page-layout__nav-item--active'>Dashboard</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout;
