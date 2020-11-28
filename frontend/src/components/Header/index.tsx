import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header>
      <nav>
        <Link to="/">Logoff</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
