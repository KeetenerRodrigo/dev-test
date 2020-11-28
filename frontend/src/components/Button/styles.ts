import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #5d737e;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fcfcfc;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#5D737E')};
  }
`;