import styled from 'styled-components';
// import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #3f4045;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3f4045;
  color: #fcfcfc;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    `
      border-color: #c53030;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #fcfcfc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &&::before {
      border-color: #c53030 transparent;
    }
  }
`;
