import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface StyledLinkProps {
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s;
  padding-bottom: 10px;
  border-bottom: 2px solid #5636d3;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #ff872c;
    `}

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
    border-bottom: 2px solid #ff872c;
  }
`;
