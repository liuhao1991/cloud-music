import axios from 'axios';

var http = axios.create({
  baseURL: 'https://localhost:3001/api/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
   }
});

export default http;
