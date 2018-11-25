import axios from 'axios';

var http = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
   }
});

export default http;
