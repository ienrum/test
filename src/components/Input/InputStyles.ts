import styled from 'styled-components';

export interface WrapperProps {
  block?: boolean;
}

export interface StyledInputProps {
  invalid?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`;
