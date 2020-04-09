import {useState, useEffect} from 'react';
import {Network as NetworkComponent} from '~/components/pages/network';
import Layout from '~/components/layout';
import {getNetworkApi} from '~/api';

const Network = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getNetworkApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'network'}>
    <h3>Network</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : <NetworkComponent data={data} />
    }
  </Layout>
}

export default Network;
