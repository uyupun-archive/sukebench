import {useState, useEffect} from 'react';
import {Disks as DisksComponent} from '~/components/pages/disks';
import Layout from '~/components/layout';
import {getDisksApi} from '~/api';
import {IDisks} from "~/interfaces";

const getDisksComponent = (data: IDisks) => {
  return data ? <DisksComponent data={data} /> : null;
};

const Disks = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IDisks>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getDisksApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'disks'}>
    <h3>Disks</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : getDisksComponent(data)
    }
  </Layout>
};

export default Disks;
