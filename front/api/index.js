import axios from 'axios';

const getCpu = async () => {
  return await axios.get(`${process.env.apiUrl}/cpu`);
};

export {getCpu};
