/*
 * Portfolio Messages
 *
 * This contains all the text for the Portfolio container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Portfolio';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: `Here are some projects I haven't disavowed yet.`,
  },
  timestamp: {
    id: `${scope}.timestamp`,
    defaultMessage: `Timestamp Microservice`,
  },
});
