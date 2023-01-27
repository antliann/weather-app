import axios from 'axios';
import { BASE_URL } from './constants';

export const performRequest = (endpoint: string, params: any) => {
  const url = BASE_URL + endpoint;
  return axios.get(url, { params }).then(response => response.data);
};
