import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {TStore} from './store';
import assign from 'lodash/assign';
// import env from 'env';
import {create} from 'apisauce';

export const api = create({
  baseURL:'',// env.BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

export type TTokenKeys = {
  [K in TokenKeys]: any;
};

export enum TokenKeys {
  TOKEN = 'token',
  device_token = 'device_token',
}

const initAxios = (store: TStore) => {
  api.axiosInstance.interceptors.request.use(config => {
    //const tokens = store.getState().tokens;
    const authorization = `Bearer ${/*tokens[TokenKeys.TOKEN]*/''}`;
    const authHeaders = {authorization};
    assign(config.headers, authHeaders);
    return config;
  });

  const injectAuthHeaders = (config: AxiosRequestConfig) => {
    // const tokens = store.getState().tokens;
    const authorization = `Bearer ${/*tokens[TokenKeys.TOKEN]*/ ''}`;
    const authHeaders = {authorization};
    assign(config.headers, authHeaders);
    return config;
  };

  const unautherizedHandling = (error: AxiosError) => {
    const {status, data} = (error?.response as any) || {};
    //error handling
  };

  const handleFormData = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        'Content-Type': 'multipart/form-data',
      });
    }
    return config;
  };

  axios.defaults.baseURL =''// env.BASE_URL;
  axios.interceptors.response.use(undefined, error => {
    unautherizedHandling(error);
    return Promise.reject(error?.response);
  });
};

export default initAxios;
