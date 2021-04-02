import React from 'react';

import { Container, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo source={require('../../assets/star-wars-logo.png')}/>
    </Container>

  );
}

export default Header;