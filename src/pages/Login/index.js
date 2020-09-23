import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useAuth} from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import { Container, Content, Form } from './styles';

const Login = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await signIn(email,password);
      
      console.log("handleSubmit success");

      history.push('/dashboard');
    } catch (error) {
      console.log("handleSubmit error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt=""/>

        <Form onSubmit={handleSubmit} style={{ width: "315px"}}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />

          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />

          <button type="submit">{loading ? "Carregando" : "Acessar"}</button>
        </Form>
      </Content>
    </Container>
  )
}

export default Login;