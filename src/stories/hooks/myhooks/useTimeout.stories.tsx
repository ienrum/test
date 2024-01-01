import useTimeout from '../../../myhooks/useTimeout';

export default {
  title: 'MyHook/useTimeout',
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert('실행!');
  }, 3000);

  return (
    <>
      <div>useTimeout 테스트</div>
      <button onClick={clear}>멈춰!</button>
    </>
  );
};
