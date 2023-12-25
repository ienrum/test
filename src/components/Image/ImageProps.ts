import React from 'react';

interface ImageProps {
  //lazy?: boolean;
  //threshold?: number;
  placeholder?: string;
  src: string;
  block?: boolean;
  width?: number | string;
  height?: number | string;
  alt?: string;
  mode?: 'cover' | 'fill' | 'contain';
  style?: React.CSSProperties;
}

export default ImageProps;
