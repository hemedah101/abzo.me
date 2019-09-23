/**
 *
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    margin: 0,
    fontSize: '1.75em',
    marginBottom: '1.5em',
    fontWeight: 400,
    marginTop: theme.spacing(5),
  },
  icon: {
    fontSize: 70,
    marginRight: '0.25em',
  },
  email: {
    color: '#006bd4',
    fontWeight: 300,
    textDecoration: 'none',
    '&:hover': {
      borderBottom: '1px solid',
    },
  },
}));

export function Contact() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Description of Contact" />
      </Helmet>

      <h1 className={classes.header}>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>
        <EmailIcon className={classes.icon} />
        <a className={classes.email} href="mailto:Hemedah94@gmail.com">
          <FormattedMessage {...messages.email} />
        </a>
      </div>
    </Container>
  );
}

Contact.propTypes = {
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

export default compose(withConnect)(Contact);
