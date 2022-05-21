
import axios from 'axios';
import { BACKEND_AUTHORITY, BACKEND_SCHEME } from './constants';

const backendAxios = axios.create({
  withCredentials: true,
  baseURL: `${BACKEND_SCHEME}://${BACKEND_AUTHORITY}`
});

export default backendAxios;