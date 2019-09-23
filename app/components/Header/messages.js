/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'ABZO',
  },
  resume: {
    id: `${scope}.resume`,
    defaultMessage: 'RÉSUMÉ',
  },
  portfolio: {
    id: `${scope}.portfolio`,
    defaultMessage: 'portfolio',
  },
  personal: {
    id: `${scope}.personal`,
    defaultMessage: 'personal',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'contact',
  },
});
