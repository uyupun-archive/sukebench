import {Processes as CProcesses} from '~/components/pages/processes';
import Layout from '~/components/layout';
import * as dummy from '~/dummy';

const Processes = () => {
  return <Layout activeKey={'processes'}>
    <h3>Processes</h3>
    <CProcesses data={dummy.processesDummyData} />
  </Layout>
}

export default Processes;
