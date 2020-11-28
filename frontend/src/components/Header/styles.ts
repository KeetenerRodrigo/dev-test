import styled from 'styled-components';

export const Container = styled.div`
  background: #02111b;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: 0 20px 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
