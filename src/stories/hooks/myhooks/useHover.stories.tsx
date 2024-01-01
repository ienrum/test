import styled from 'styled-components';
import useHover from '../../../myhooks/useHover';

export default {
  title: 'MyHook/useHover',
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const Default = () => {
  const [ref, hover] = useHover();

  return (
    <>
      <Box ref={ref} />
      {hover ? <div>ToolTip!</div> : null}
    </>
  );
};
