import { ButtonProps } from '@/types/ButtonProps';
import { ButtonLayout, ButtonWrapper } from './StyledButton';
import { PropsWithChildren } from 'react';

const Button = ({
  children,
  type,
  size,
  event,
  isArrow = false,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonWrapper isActive={event === 'focus'} type={type} size={size}>
      <ButtonLayout type={type} size={size} event={event} isArrow={isArrow}>
        {size !== 'mini' && children}
        {(isArrow || size === 'mini') && <span>{'>'}</span>}
      </ButtonLayout>
    </ButtonWrapper>
  );
};

export default Button;
