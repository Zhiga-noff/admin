import axios from 'axios';
import * as process from 'process';
import { MODIFICATION_URL } from '@/constant/api';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN + MODIFICATION_URL,
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

export const uploadApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN + MODIFICATION_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
