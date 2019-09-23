/**
 *
 * Portfolio
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

export function Portfolio() {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Description of Portfolio" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Portfolio.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Portfolio);
