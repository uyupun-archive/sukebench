import {NetworkConnections as CNetworkConnections} from '~/components/pages/networkConnections';
import Layout from '~/components/layout';
import * as dummy from '~/dummy';

const NetworkConnections = () => {
  return <Layout activeKey={'networkConnections'}>
    <h3>NetworkConnections</h3>
    <CNetworkConnections data={dummy.networkConnectionsDummyData} />
  </Layout>
}

export default NetworkConnections;
