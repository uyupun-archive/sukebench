import axios from 'axios';

const getCpuApi = async () => {
  return await axios.get(`${process.env.apiUrl}/cpu`);
};

const getMemoryApi = async () => {
  return await axios.get(`${process.env.apiUrl}/memory`);
};

const getSwapApi = async () => {
  return await axios.get(`${process.env.apiUrl}/swap`);
};

export {
  getCpuApi,
  getMemoryApi,
  getSwapApi
};
