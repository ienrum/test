﻿import { BackgroundDim, ModalContainer } from './ModalStyles';
import { useEffect, useMemo, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import useClickAway from '../../hooks/useClickAway';

interface ModalProps {
  width?: number;
  height?: number;
  visible?: boolean;
  style?: React.CSSProperties;
  //closePos 추가
  //contentPos 추가
  //bordered
  onClose?: () => void;
}

const Modal = ({
  children,
  width = 500,
  height,
  visible = false,
  onClose,
  ...props
}: PropsWithChildren<ModalProps>) => {
  const ref = useClickAway(() => {
    onClose && onClose();
  });

  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );

  const el = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer
        ref={ref}
        {...props}
        style={{ ...props.style, ...containerStyle }}>
        {children}
      </ModalContainer>
    </BackgroundDim>,
    el,
  );
};

export default Modal;
