import axios from "axios";

/**
 * axios configuration
 * TODO : set real base url
 */
export default axios.create({
baseURL: 'https://jsonplaceholder.typicode.com', 
 //baseURL:'http://localhost:3000/request',
});
