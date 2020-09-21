import React from 'react';

import { Container } from './styles';

const Dashboard = () => {

  return (
    <Container ativo={false}>
      <h1>Dashboard</h1>
      <p className="texto">ReactJS</p>
    </Container>
  )
}

export default Dashboard;
