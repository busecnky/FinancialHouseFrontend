import axios from 'axios';

const API_BASE_URL = '/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => {
        const token = response.headers['authorization'];
        if (token) {
            localStorage.setItem('token', token);
        }
        return response;
    },
    (error) => Promise.reject(error)
);
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
export const login = async (credentials) => {
    const response = await apiClient.post('/merchant/user/login', credentials);
    return response.data;
};

export const getTransactionReport = async (requestData) => {
    const response = await apiClient.post('/transactions/report', requestData);
    return response.data;
};

export const getTransactionList = async (requestData) => {
    const response = await apiClient.post('/transaction/list', requestData);
    return response.data;
};

export const getTransaction = async (requestData) => {
    const response = await apiClient.post('/transaction', requestData);
    return response.data;
};

export const getClient = async (requestData) => {
    const response = await apiClient.post('/client', requestData);
    return response.data;
};