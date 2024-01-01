import { useCallback, useRef, useState } from 'react';

export type AsyncFnReturn<T, E> = {
  isLoading: boolean;
  value?: T;
  error?: E;
};

const useAsyncFn = <T, E, Args extends unknown[] = unknown[]>(
  fn: (...args: Args) => Promise<T>,
  deps: React.DependencyList,
): [AsyncFnReturn<T, E>, (...args: Args) => Promise<T | E>] => {
  const lastCallId = useRef(0);
  const [state, setState] = useState<AsyncFnReturn<T, E>>({ isLoading: false });

  const callback = useCallback((...args: Args): Promise<T | E> => {
    const callId = ++lastCallId.current;

    if (!state.isLoading) {
      setState({ ...state, isLoading: true });
    }

    return fn(...args).then(
      (value: T) => {
        if (callId === lastCallId.current) {
          setState({ value, isLoading: false });
        }
        return value;
      },
      (error: E) => {
        if (callId === lastCallId.current) {
          setState({ error, isLoading: false });
        }
        return error;
      },
    );
  }, deps);

  return [state, callback];
};

export default useAsyncFn;
