import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.ativo ? "#fff" : "#000"};

  h1 {
    color: yellow;
  }

  p {
    font-size: 30px;
  }

  .texto{
    color: green;
  }
`;