import {Memory as CMemory} from '../../components/pages/memory';
import Layout from '../../components/layout';
import * as dummy from '../../dummy';

const Memory = () => {
  return <Layout activeKey={'/memory'}>
    <h3>Memory</h3>
    <CMemory data={dummy.memoryDummyData} />
  </Layout>
}

export default Memory;
