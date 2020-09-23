import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin-bottom: 80px;
`;

export const Form = styled.form`
  margin-top: 30px;

  input{
    flex: 1;
    height: 50px;
    padding: 0 25px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    transition: border-color .3s linear .1s;

    & + input {
      margin-top: 16px;
    }

    &::placeholder{
      color: #a8a8b3;
    }
    &:hover {
      border-bottom: 1px solid #04d361;
    }
  }

  button {
    margin-top: 30px;
    width: 255px;
    height: 50px;
    background: #04d361;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }
`;