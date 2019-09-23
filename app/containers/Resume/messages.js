/*
 * Resume Messages
 *
 * This contains all the text for the Resume container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Resume';

export default defineMessages({
  header1: {
    id: `${scope}.header1`,
    defaultMessage: `I've seen some things.`,
  },
  header2: {
    id: `${scope}.header2`,
    defaultMessage: `Skills`,
  },
  header3: {
    id: `${scope}.header3`,
    defaultMessage: `Education`,
  },
});
