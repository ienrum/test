﻿import useTimeoutFn from './useTimeoutFn';
import { useEffect } from 'react';

const useDebounce = (
  fn: () => void,
  ms: number,
  deps: React.DependencyList,
) => {
  const [run, clear] = useTimeoutFn(fn, ms);
  // eslint-disable-next-line
  useEffect(run, deps);

  return clear;
};

export default useDebounce;
