import useLocalStorage from '../../../myhooks/useLocalStorage';

export default {
  title: 'MyHook/useLocalStorage',
};

export const Default = () => {
  const [status, setStatus] = useLocalStorage('status', '404 NOT FOUND');

  return (
    <div>
      <button onClick={() => setStatus('200 OK')}>Resend</button>
      {status}
    </div>
  );
};
