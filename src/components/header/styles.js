import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 40px;

  ul {
    display: flex;
    list-style: none;

    li {
      font-size: 14px;

      & + li{
        margin-left: 15px;
      }

      a {
        color: #333;
        text-decoration: none;

        &:hover {
          color: #04d361;
        }
      }

      span {
        color: #333;
        cursor: pointer;

        &:hover {
          color: #04d361;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;
