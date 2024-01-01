import defaultAxios, { AxiosRequestConfig, AxiosError } from 'axios';

import { useState, useEffect } from 'react';

interface AxiosState {
  isLoading: boolean;
  error: AxiosError | null;
  data: object | null;
}

const useAxios = (
  options: AxiosRequestConfig,
  axiosInstance = defaultAxios,
): [
  { isLoading: boolean; error: AxiosError | null; data: object | null },
  () => void,
] => {
  const [state, setState] = useState<AxiosState>({
    isLoading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      isLoading: true,
    });
  };

  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          isLoading: false,
          data,
        });
      })
      .catch((error: AxiosError) => {
        setState({ ...state, isLoading: false, error });
      });
  }, []);
  return [{ ...state }, refetch];
};

export default useAxios;
