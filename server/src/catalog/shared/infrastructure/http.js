import fetch from 'node-fetch';

export const get = (url, props = {}) => fetch(url, {method: 'GET', ...props})