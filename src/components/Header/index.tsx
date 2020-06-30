import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <StyledLink to="/" active={pathname === '/'}>
            Listagem
          </StyledLink>
          <StyledLink to="/import" active={pathname === '/import'}>
            Importar
          </StyledLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
