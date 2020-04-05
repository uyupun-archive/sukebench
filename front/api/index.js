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

const getDisksApi = async () => {
  return await axios.get(`${process.env.apiUrl}/disks`);
};

const getNetworkApi = async () => {
  return await axios.get(`${process.env.apiUrl}/network`);
};

const getNetworkConApi = async () => {
  return await axios.get(`${process.env.apiUrl}/network/connections`);
};

const getProcessesApi = async () => {
  return await axios.get(`${process.env.apiUrl}/procs`);
};

const getDevicesApi = async () => {
  return await axios.get(`${process.env.apiUrl}/devices`);
};

export {
  getCpuApi,
  getMemoryApi,
  getSwapApi,
  getDisksApi,
  getNetworkApi,
  getNetworkConApi,
  getProcessesApi,
  getDevicesApi
};
