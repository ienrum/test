import React from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  //lazy?: boolean;
  //threshold?: number;
  placeholder?: string;
  //src: string;
  block?: boolean;
  //width?: number | string;
  //height?: number | string;
  //alt: string;
  mode?: 'cover' | 'fill' | 'contain';
  style?: React.CSSProperties;
}
