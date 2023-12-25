import styled from 'styled-components';
import Base from './Base';

const CircularBase = styled(Base)`
  border-radius: 50%;
`;

interface CircleProps {
  size: number;
}
const Circle = ({ size }: CircleProps) => (
  <CircularBase style={{ width: size, height: size }} />
);

export default Circle;
