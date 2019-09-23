/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
// import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
// import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2em',
  },
  header: {
    margin: 0,
    fontSize: '1.75em',
    marginBottom: '1.5em',
    fontWeight: 400,
  },
  title: {
    margin: 0,
    fontSize: '1.5em',
    textAlign: 'start',
    marginLeft: '1.4em',
    textIndent: '-1.4em',
    fontWeight: 400,
  },
  subtitle: {
    margin: 0,
    fontWeight: 300,
    marginLeft: theme.spacing(6),
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(5),
  },
  check: {
    marginRight: theme.spacing(2),
    color: '#228b22',
    fontSize: 30,
  },
  plus: {
    marginRight: theme.spacing(2),
    color: '#daa520',
    fontSize: 30,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <h1 className={classes.header}>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>
        <section>
          <h2 className={classes.title}>
            <CheckCircleOutlineOutlinedIcon className={classes.check} />
            <FormattedMessage {...messages.backendTitle} />
          </h2>
          <p className={classes.subtitle}>
            <FormattedMessage {...messages.backendSubtitle} />
          </p>
        </section>
        <section className={classes.section}>
          <h2 className={classes.title}>
            <CheckCircleOutlineOutlinedIcon className={classes.check} />
            <FormattedMessage {...messages.frontendTitle} />
          </h2>
          <p className={classes.subtitle}>
            <FormattedMessage {...messages.frontendSubtitle} />
          </p>
        </section>
      </div>
    </Container>
  );
}
