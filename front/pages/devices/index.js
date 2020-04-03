import {Devices as CDevices} from '../../components/pages/devices';
import Layout from '../../components/layout';
import * as dummy from '../../dummy';

const Devices = () => {
  return <Layout activeKey={'/devices'}>
    <h3>Devices</h3>
    <CDevices data={dummy.devicesDummyData} />
  </Layout>
}

export default Devices;
