/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'I build websites. Like this one, for example.',
  },
  backendTitle: {
    id: `${scope}.backendTitle`,
    defaultMessage: `I'm a back-end web developer.`,
  },
  backendSubtitle: {
    id: `${scope}.backendSubtitle`,
    defaultMessage: `Node.js, Graphql and SQL`,
  },
  frontendTitle: {
    id: `${scope}.frontendTitle`,
    defaultMessage: `...and a front-end web developer.`,
  },
  frontendSubtitle: {
    id: `${scope}.frontendSubtitle`,
    defaultMessage: `React, HTML, JavaScript, and CSS.`,
  },
  full: {
    id: `${scope}.full`,
    defaultMessage: `If you want to be dramatic about it:`,
  },
  fullSubtitle: {
    id: `${scope}.fullSubtitle`,
    defaultMessage: `Full-stack Web Developer`,
  },
});
