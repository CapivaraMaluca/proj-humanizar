/**
 * 
 * AQUI VAI SER CONFIGURADO A API DO APLICATIVO
 * 
 */
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3000'
});

export default api;