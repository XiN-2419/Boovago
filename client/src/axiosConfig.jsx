import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://boovago.onrender.com/api/v1',
});

export default instance;