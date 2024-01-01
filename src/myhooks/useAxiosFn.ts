import defaultAxios,{ AxiosRequestConfig ,AxiosError} from "axios";
import { useState, useEffect } from 'react';

const useAxiosFn = (opts: AxiosRequestConfig , axiosInstance =defaultAxios):  [
  { isLoading: boolean; error: AxiosError | null; data: object | null },
  () => void,
] => {