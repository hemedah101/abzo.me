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

import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import KeyboardOutlinedIcon from '@material-ui/icons/KeyboardOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
  },
  header: {
    margin: 0,
    fontSize: '1.75em',
    marginBottom: '1.5em',
    fontWeight: 400,
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: '400',
  },
  subtitle: {
    fontSize: '1em',
    fontWeight: '300',
    margin: '1em 0 1em 0',
  },
  icon: {
    marginRight: '4px',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  link: {
    fontSize: '1em',
    margin: '1em 0 1em 0',
    color: '#006bd4',
    fontWeight: 300,
    textDecoration: 'none',
    // '&:hover': {
    //   borderBottom: '1px solid',
    // },
  },
  divider: {
    borderBottom: '1px solid #000',
    paddingBottom: theme.spacing(3),
  },
}));

export function Portfolio() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Description of Portfolio" />
      </Helmet>
      <h1 className={classes.header}>
        <FormattedMessage {...messages.header} />
      </h1>
      <Container maxWidth="sm">
        <section className={classes.divider}>
          <h1 className={classes.title}>WiFi Attendance API</h1>
          <p className={classes.subtitle}>
            <InfoOutlinedIcon className={classes.icon} />
            API that takes employees attendance and tracks their working Hours
          </p>
          <p className={classes.subtitle}>
            <KeyboardOutlinedIcon className={classes.icon} />
            NestJs, MongoDB, WebSockets, Express, Typescript
          </p>
          <a
            href="https://gas-api.graysoftwares.com/docs/"
            className={classes.link}
          >
            <LinkOutlinedIcon className={classes.icon} />
            View site
          </a>
        </section>
        <section className={classes.divider}>
          <h1 className={classes.title}>WiFi Attendance Control Panel</h1>
          <p className={classes.subtitle}>
            <InfoOutlinedIcon className={classes.icon} />
            For managers to create organizations, invite and monitor employees
          </p>
          <p className={classes.subtitle}>
            <KeyboardOutlinedIcon className={classes.icon} />
            React, Redux, Socket.io
          </p>
          <a
            href="https://gas-cpanel.graysoftwares.com/"
            className={classes.link}
          >
            <LinkOutlinedIcon className={classes.icon} />
            View site
          </a>
        </section>
        <section className={classes.divider}>
          <h1 className={classes.title}>Chat Application</h1>
          <p className={classes.subtitle}>
            <InfoOutlinedIcon className={classes.icon} />
            Realtime, room based chat application
          </p>
          <p className={classes.subtitle}>
            <KeyboardOutlinedIcon className={classes.icon} />
            Node.js, Socket.io, Express, Javascript
          </p>
          <a
            href="https://abzo-chat-application.herokuapp.com/"
            className={classes.link}
          >
            <LinkOutlinedIcon className={classes.icon} />
            View site
          </a>
        </section>
        <section className={classes.divider}>
          <h1 className={classes.title}>Ecommerce Backend</h1>
          <p className={classes.subtitle}>
            <InfoOutlinedIcon className={classes.icon} />
            eCommerce backend APIs using node.js and MySQL database
          </p>
          <p className={classes.subtitle}>
            <KeyboardOutlinedIcon className={classes.icon} />
            Node.js, Express, MySQL, Javascript
          </p>
          <a
            href="https://github.com/ABZ0/MySQL-ecommerce"
            className={classes.link}
          >
            <LinkOutlinedIcon className={classes.icon} />
            View on github
          </a>
        </section>
      </Container>
    </Container>
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
