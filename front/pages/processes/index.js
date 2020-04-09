import {useState, useEffect} from 'react';
import {Processes as ProcessesComponent} from '~/components/pages/processes';
import Layout from '~/components/layout';
import {getProcessesApi} from '~/api';

const Processes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getProcessesApi();
        setData(response.data);
      } catch(error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <Layout activeKey={'processes'}>
    <h3>Processes</h3>
    {
      isLoading
        ? <p className='text-center'>Loading...</p>
        : <ProcessesComponent data={data} />
    }
  </Layout>
}

export default Processes;
