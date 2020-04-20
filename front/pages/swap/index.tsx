import {useState, useEffect} from 'react';
import {Swap as SwapComponent} from '~/components/pages/swap';
import Layout from '~/components/layout';
import {getSwapApi} from '~/api';
import {ISwap} from "~/interfaces";

const getCpuComponent = (data: ISwap) => {
  return data ? <SwapComponent data={data} /> : null;
};

const Swap = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ISwap>();

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
        : getCpuComponent(data)
    }
  </Layout>
};

export default Swap;
