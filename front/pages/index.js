import {useState, useEffect} from 'react';
import {Cpu as CpuComponent} from '~/components/pages/cpu';
import Layout from '~/components/layout';
import {getCpuApi} from '~/api';

const Cpu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const getCpu = async () => {
      setIsLoading(true);
      try {
        const response = await getCpuApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    getCpu();
  }, []);

  return <Layout activeKey={'cpu'}>
    <h3>CPU</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : <CpuComponent data={data} />
    }
  </Layout>
}

export default Cpu;
