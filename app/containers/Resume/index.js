/**
 *
 * Resume
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
  content: {
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: 'start',
    [theme.breakpoints.up('md')]: {
      marginLeft: '8em',
    },
  },
  title: {
    margin: 0,
    padding: 0,
    fontSize: '1em',
    fontWeight: 400,
    marginBottom: '0.5em',
    marginLeft: '2.5em',
  },
  list: {
    margin: '0 0 2em 1.25em',
    listStyleType: 'square',
    fontWeight: 300,
  },
  noList: {
    listStyleType: 'none',
    [theme.breakpoints.up('md')]: {
      marginLeft: '8em',
    },
  },
  text: {
    marginTop: 0,
    fontWeight: 300,
  },
  education: {
    marginTop: '-1em',
    fontWeight: 300,
    [theme.breakpoints.up('md')]: {
      marginLeft: '10.5em',
    },
  },
}));

export function Resume() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Helmet>
        <title>Resume</title>
        <meta name="description" content="content of my Resume" />
      </Helmet>
      <section>
        <h1 className={classes.header}>
          <FormattedMessage {...messages.header1} />
        </h1>
        <div className={classes.content}>
          <h2 className={classes.title}>
            <strong>Backend Developer</strong>, 2019 - present
          </h2>
          <ul className={classes.list}>
            <li>I'm working on some freelance projects.</li>
            <li>
              I write code and provide technical advice about design, UX,
              database structuring, and process.
            </li>
          </ul>
        </div>
        <div className={classes.content}>
          <h2 className={classes.title}>
            <strong>Game Developer</strong>, 2017 - 2018
          </h2>
          <ul className={classes.list}>
            <li>I worked on several games solo and in team projects.</li>
            <li>The work was done in C# in the unity engine</li>
          </ul>
        </div>
      </section>
      <section>
        <h1 className={classes.header}>
          <FormattedMessage {...messages.header2} />
        </h1>
        <ul className={classes.noList}>
          <li>
            <strong>Languages and runtimes</strong>
            <p className={classes.text}>
              JavaScript, Typescript, Node.js, Graphql, HTML, CSS
            </p>
          </li>
          <li>
            <strong>Frameworks</strong>
            <p className={classes.text}>Express, React.js, Webpack</p>
          </li>
          <li>
            <strong>Database</strong>
            <p className={classes.text}>MongoDB, Firestore, MySQL</p>
          </li>
          <li>
            <strong>Web Servers</strong>
            <p className={classes.text}>Nginx, Apache</p>
          </li>
          <li>
            <strong>Version control</strong>
            <p className={classes.text}>Git</p>
          </li>
        </ul>
      </section>
      <section>
        <h1 className={classes.header}>
          <FormattedMessage {...messages.header3} />
        </h1>
        <div>
          <p className={classes.education}>
            I have a bachelor's degree from Damanhour University. In pharmacy
            ¯\_(ツ)_/¯.
          </p>
        </div>
      </section>
    </Container>
  );
}

Resume.propTypes = {
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

export default compose(withConnect)(Resume);
