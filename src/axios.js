import axios from "axios";
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', // Set a base URL for all requests
    headers: {
    
    },
  });

  export default instance