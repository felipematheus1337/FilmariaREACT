import axios from 'axios';


//BASE URL https://sujeitoprogramador.com/
// TODOS OS FILMES /r-api/?api=filmes/

const api  = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;