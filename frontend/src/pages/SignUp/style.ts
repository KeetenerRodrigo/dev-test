import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  text-align: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
from {
opacity: 0;
transform: translateX(50px);
}

to{
  opacity: 1;
transform: translateX(0);
}
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #5d737e;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #5d737e;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#5d737e')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
