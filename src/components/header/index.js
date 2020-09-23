import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const Header = ({title}) => {
  const {signOut} = useAuth();

  return (
    <>
      <Container>
        <img src={logoImg} alt="" />

        <ul>
          <li>
            <Link to='/dashboard'>
              Dashboard
            </Link>
          </li>
          <li>
          <Link to='/tarefas'>
              Tarefas
            </Link>
          </li>
          <li>
          <Link to='/'>
              logout
            </Link>
          </li>
        </ul>
      </Container>

      <Title>{title}</Title>
    </>
  )
}

export default Header;