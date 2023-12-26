import React from 'react';

interface TextProps {
  size?: number | string;
  block?: boolean;
  paragraph?: boolean;
  delete?: boolean;
  code?: boolean;
  mark?: boolean;
  strong?: boolean;
  underline?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

export default TextProps;
