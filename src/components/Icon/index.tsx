import styled from 'styled-components';

const IconWrapper = styled.i`
  display: inline-block;
`;

interface IconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  rotate?: number;
  color?: string;
  style?: React.CSSProperties;
}

const Icon = ({
  name,
  size = 16,
  strokeWidth = 2,
  rotate,
  color = '#222',
  ...props
}: IconProps) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };
  const iconStyle = {
    'stroke-width': strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = require('feather-icons').icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : '';
  const base64 = Buffer.from(svg, 'utf8').toString('base64');

  return (
    <IconWrapper {...props} style={{ ...props.style, ...shapeStyle }}>
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
