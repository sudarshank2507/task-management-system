import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/tasks/";

export const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};
