import {Disks as CDisks} from '../../components/pages/disks';
import Layout from '../../components/layout';
import * as dummy from '../../dummy';

const Disks = () => {
  return <Layout activeKey={'/disks'}>
    <h3>Disks</h3>
    <CDisks data={dummy.disksDummyData} />
  </Layout>
}

export default Disks;
