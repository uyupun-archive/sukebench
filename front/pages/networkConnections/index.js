import {useState, useEffect} from 'react';
import {NetworkConnections as NetworkConComponent} from '~/components/pages/networkConnections';
import Layout from '~/components/layout';
import {getNetworkConApi} from '~/api';

const NetworkConnections = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getNetworkConApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'networkConnections'}>
    <h3>NetworkConnections</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : <NetworkConComponent data={data} />
    }
  </Layout>
}

export default NetworkConnections;
