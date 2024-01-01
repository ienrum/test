import useAsyncFn, { AsyncFnReturn } from './useAsyncFn';
import { useEffect } from 'react';

const useAsync = <T, E>(
  fn: () => Promise<T>,
  deps: React.DependencyList,
): AsyncFnReturn<T, E> => {
  const [state, callback] = useAsyncFn<T, E>(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;
