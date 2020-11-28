import React from 'react';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';

interface ToastContainerProp {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProp> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
