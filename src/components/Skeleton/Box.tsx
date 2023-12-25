import Base from './Base';

interface BoxProps {
  width: number | string;
  height: number | string;
}
const Box = ({ width, height }: BoxProps) => <Base style={{ width, height }} />;

export default Box;
