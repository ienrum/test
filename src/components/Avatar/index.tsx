import AvatarGroup from './AvatarGroup';
import AvatarProps from './AvatarProps';
import Image from '../Image';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

interface AvatarWrapperProps {
  shape: keyof typeof ShapeToCssValue;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;

  > img {
    transition: opacity 0.2s ease-out;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle', // round, square
  placeholder,
  alt,
  mode = 'cover',
  __TYPE,
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper {...props} shape={shape}>
      <Image
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  __TYPE: 'Avatar',
};

Avatar.propTypes = {
  __TYPE: 'Avatar',
};

Avatar.Group = AvatarGroup;

export default Avatar;
