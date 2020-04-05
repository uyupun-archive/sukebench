import axios from 'axios';

const getCpuApi = async () => {
  return await axios.get(`${process.env.apiUrl}/cpu`);
};

export {getCpuApi};
