import axios from "axios";

const API_URL = "https://task-manager-app-hahg.onrender.com/api/tasks";

//All tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const completeTask = async (id) => {
  const response = await axios.put(`${API_URL}/${id}`);
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await axios.put(`${API_URL}/edit/${id}`, taskData);
  return response.data;
};