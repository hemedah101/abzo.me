import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  text-decoration: none;
  ${props =>
    props.brand &&
    css`
      font-size: 3em;
      color: #2b1a1a;
      font-weight: 300;
    `}
  ${props =>
    props.nav &&
    css`
      color: #1e90ff;
      padding: 0 0 0 1em;
    `}
`;

export default Link;
