import {useState, useEffect} from 'react';
import {Devices as DevicesComponent} from '~/components/pages/devices';
import Layout from '~/components/layout';
import {getDevicesApi} from '~/api';

const Devices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getDevicesApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'devices'}>
    <h3>Devices</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : <DevicesComponent data={data} />
    }
  </Layout>
}

export default Devices;
