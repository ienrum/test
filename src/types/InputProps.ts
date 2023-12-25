import { WrapperProps } from '@/components/Input/InputStyles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  block?: boolean;
  invalid?: boolean;
  wrapperProps?: WrapperProps;
  hint?: string;
}
