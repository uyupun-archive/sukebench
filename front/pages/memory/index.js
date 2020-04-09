import {useState, useEffect} from 'react';
import {Memory as MemoryComponent} from '~/components/pages/memory';
import Layout from '~/components/layout';
import {getMemoryApi} from '~/api';

const Memory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

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
        : <MemoryComponent data={data} />
    }
  </Layout>
}

export default Memory;
