import axios from 'axios';

const apiKey = '';

export const cryptoHttp = axios.create({
  baseURL: 'https://min-api.cryptocomparee.com/data',
  headers: {
    Authorization: `Apikey ${apiKey}`,
  },
});
