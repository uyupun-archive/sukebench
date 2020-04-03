import {Network as CNetwork} from '~/components/pages/network';
import Layout from '~/components/layout';
import * as dummy from '~/dummy';

const Network = () => {
  return <Layout activeKey={'network'}>
    <h3>Network</h3>
    <CNetwork data={dummy.networkDummyData} />
  </Layout>
}

export default Network;
