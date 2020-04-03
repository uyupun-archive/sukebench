import {Cpu as CCpu} from '~/components/pages/cpu';
import Layout from '~/components/layout';
import * as dummy from '~/dummy';

const Cpu = () => {
  return <Layout activeKey={'/'}>
    <h3>CPU</h3>
    <CCpu data={dummy.cpuDummyData} />
  </Layout>
}

export default Cpu;
