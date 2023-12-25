import { ProgressContainer, Rail, Track } from './ProgressStyles';
import { ProgressProps } from '@/types/ProgressProps';

const Progress = ({ value, ...props }: ProgressProps) => {
  return (
    <ProgressContainer {...props}>
      <Rail />
      <Track style={{ width: `${value}%` }} />
    </ProgressContainer>
  );
};

export default Progress;
