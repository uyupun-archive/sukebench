import {useState, useEffect} from 'react';
import {Swap as SwapComponent} from '~/components/pages/swap';
import Layout from '~/components/layout';
import {getSwapApi} from '~/api';

const Swap = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getSwapApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'swap'}>
    <h3>Swap</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : <SwapComponent data={data} />
    }
  </Layout>
}

export default Swap;
