import {useState, useEffect} from 'react';
import {Cpu as CpuComponent} from '~/components/pages/cpu';
import Layout from '~/components/layout';
import {getCpu} from '~/api';

const Cpu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const getRequest = async () => {
      setIsLoading(true);
      try {
        const response = await getCpu();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    getRequest();
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
