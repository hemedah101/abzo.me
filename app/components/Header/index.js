/**
 *
 * Header
 *
 */

import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Link from './Link';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: 0,
    padding: '1em 0 0.5em 0',
    borderBottom: '1px solid #000',
  },
  brand: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  list: {
    display: 'flex',
    textTransform: 'uppercase',
    fontSize: '80%',
    fontWeight: '300',
    padding: 0,
    margin: 0,
    paddingTop: '1em',
    [theme.breakpoints.up('md')]: {
      paddingTop: '2.5em',
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <header className={classes.header}>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.brand}>
            <Link brand exact to="/">
              <FormattedMessage {...messages.header} />
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className={classes.nav}>
            <nav>
              <ul className={classes.list}>
                <li>
                  <Link
                    nav
                    to="/resume"
                    activeStyle={{
                      fontWeight: '700',
                      color: '#0072e0',
                    }}
                  >
                    <FormattedMessage {...messages.resume} />
                  </Link>
                </li>
                <li>
                  <Link
                    nav
                    to="/portfolio"
                    activeStyle={{
                      fontWeight: '700',
                      color: '#0072e0',
                    }}
                  >
                    <FormattedMessage {...messages.portfolio} />
                  </Link>
                </li>
                <li>
                  <Link
                    nav
                    to="/personal"
                    activeStyle={{
                      fontWeight: '700',
                      color: '#0072e0',
                    }}
                  >
                    <FormattedMessage {...messages.personal} />
                  </Link>
                </li>
                <li>
                  <Link
                    nav
                    to="/contact"
                    activeStyle={{
                      fontWeight: '700',
                      color: '#0072e0',
                    }}
                  >
                    <FormattedMessage {...messages.contact} />
                  </Link>
                </li>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </header>
    </Container>
  );
}

export default Header;
