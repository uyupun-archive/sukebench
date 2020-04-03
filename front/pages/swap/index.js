import {Swap as CSwap} from '~/components/pages/swap';
import Layout from '~/components/layout';
import * as dummy from '~/dummy';

const Swap = () => {
  return <Layout activeKey={'/swap'}>
    <h3>Swap</h3>
    <CSwap data={dummy.swapDummyData} />
  </Layout>
}

export default Swap;
