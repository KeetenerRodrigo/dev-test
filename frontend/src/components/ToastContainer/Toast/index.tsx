import React, { useEffect } from 'react';
import { useTransition } from 'react-spring';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProp {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<ToastProp> = ({ message }) => {
  const { removeToast } = useToast();

  const messagesWithTransitions = useTransition(message, msn => msn.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Container
          key={key}
          style={props}
          type={item.type}
          hasdescription={item.description}
        >
          {icons[item.type || 'info']}

          <div>
            <strong>{item.title}</strong>
            {'Message Error' && <p>{item.description}</p>}
          </div>

          <button onClick={() => removeToast(item.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Container>
      ))}
    </>
  );
};

export default Toast;
