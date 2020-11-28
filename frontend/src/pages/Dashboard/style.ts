import styled, { keyframes } from 'styled-components';

interface CardProps {
  total?: boolean;
}

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

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
  animation: ${appearFromRight} 1s;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string =>
    total ? '#3F4045' : '#D3D3D3'};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#D3D3D3' : '#3F4045')};
  animation: ${appearFromRight} 1s;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  animation: ${appearFromRight} 1s;

  table {
    width: 100%;
    border-spacing: 0 8px;

    td {
      padding: 20px 32px;
      border: 0;
      background: #d3d3d3;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
