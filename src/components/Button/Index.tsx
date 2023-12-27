import { ButtonLayout, ButtonWrapper } from './StyledButton';
import { PropsWithChildren } from 'react';
import { ButtonProps } from '@/types/ButtonProps';

const Button = ({
  children,
  styleType,
  size,
  event,
  type,
  onClick,
  isArrow = false,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonWrapper
      isActive={event === 'focus'}
      styleType={styleType}
      size={size}>
      <ButtonLayout
        type={type}
        onClick={onClick}
        styleType={styleType}
        size={size}
        event={event}
        isArrow={isArrow}>
        {size !== 'mini' && children}
        {(isArrow || size === 'mini') && <span>{'>'}</span>}
      </ButtonLayout>
    </ButtonWrapper>
  );
};

export default Button;
