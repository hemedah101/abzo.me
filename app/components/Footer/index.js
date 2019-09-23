/**
 *
 * Footer
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Footer() {
  return (
    <div id="footer">
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Footer;
