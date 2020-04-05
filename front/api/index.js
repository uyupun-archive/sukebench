import axios from 'axios';

const getCpuApi = async () => {
  return await axios.get(`${process.env.apiUrl}/cpu`);
};

const getMemoryApi = async () => {
  return await axios.get(`${process.env.apiUrl}/memory`);
};

export {
  getCpuApi,
  getMemoryApi
};
