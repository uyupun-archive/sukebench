import {useState, useEffect} from 'react';
import {Processes as ProcessesComponent} from '~/components/pages/processes';
import Layout from '~/components/layout';
import {getProcessesApi} from '~/api';
import {IProcesses} from "~/interfaces";

const getProcessesComponent = (data: IProcesses[]) => {
  return data ? <ProcessesComponent data={data} /> : null;
};

const Processes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IProcesses[]>();

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
        : getProcessesComponent(data)
    }
  </Layout>
};

export default Processes;
