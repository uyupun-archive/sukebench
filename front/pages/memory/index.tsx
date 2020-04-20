import {useState, useEffect} from 'react';
import {Memory as MemoryComponent} from '~/components/pages/memory';
import Layout from '~/components/layout';
import {getMemoryApi} from '~/api';
import {IMemory} from "~/interfaces";

const getMemoryComponent = (data: IMemory) => {
  return data ? <MemoryComponent data={data} /> : null;
};

const Memory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IMemory>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getMemoryApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'memory'}>
    <h3>Memory</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : getMemoryComponent(data)
    }
  </Layout>
};

export default Memory;
