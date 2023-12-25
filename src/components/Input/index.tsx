import { Wrapper, StyledInput } from './InputStyles';
import { InputProps } from '@/types/InputProps';

const Input = ({
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readonly = false,
  placeholder = '',
  wrapperProps,
  ...props
}: InputProps) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      {/* <Label>{label}</Label> */}
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        placeholder={placeholder}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
