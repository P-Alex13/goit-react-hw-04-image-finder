import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled, Overlay } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') onClose();
    };

    const handleOutsideClick = event => {
      if (event.target === event.currentTarget) onClose();
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={handleOutsideClick}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
