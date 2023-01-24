import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { CompPropsWithChildrenAndStyles } from 'types';
import './Modal.css';

type ModalType = {
  closeModal?: (e: any) => void | undefined;
} & CompPropsWithChildrenAndStyles;

const Backdrop: FC<ModalType> = ({ closeModal }: ModalType) => {
  return <div className="modal--backdrop" onClick={closeModal} />;
};

const ModalContent: FC<ModalType> = ({ closeModal, children, styles }) => {
  return <div className="modal--content-container"></div>;
};

const Modal: FC<ModalType> = ({ closeModal, children, styles }: ModalType) => {
  const backdropRoot = document.getElementById('modal--backdrop-root');
  const modalRoot = document.getElementById('modal--overlay-root');
  return (
    <>
      {backdropRoot &&
        ReactDOM.createPortal(
          <Backdrop closeModal={closeModal} />,
          backdropRoot
        )}
      {modalRoot &&
        ReactDOM.createPortal(
          <ModalContent closeModal={closeModal} />,
          modalRoot
        )}
    </>
  );
};

export default Modal;
