import { ReactNode } from 'react';

interface AvatarProps {
  lazy?: boolean;
  threshold?: number;
  src: string;
  size?: number;
  shape?: keyof typeof ShapeToCssValue;
  placeholder?: string;
  alt?: string;
  mode?: 'cover' | 'contain';
  __TYPE?: string;
  children?: ReactNode;
}

export default AvatarProps;
