import {useState, useEffect} from 'react';
import {Cpu as CpuComponent} from '~/components/pages/cpu';
import Layout from '~/components/layout';
import {getCpuApi} from '~/api';
import {ICpu} from "~/interfaces";

const getCpuComponent = (data: ICpu) => {
  return data ? <CpuComponent data={data} /> : null;
};

const Cpu = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ICpu>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getCpuApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'cpu'}>
    <h3>CPU</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : getCpuComponent(data)
    }
  </Layout>
};

export default Cpu;
