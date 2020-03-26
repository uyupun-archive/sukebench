import Head from 'next/head';
import {Container, Tab, Tabs} from 'react-bootstrap';
import {Cpu, Memory, Swap, Disks, Network, NetworkConnections, Processes} from '../components/pages/index';
import * as dummy from '../dummy';

const Home = () => (
  <Container>
    <Head>
      <title>Sukebench</title>
    </Head>

    <main>
      <h1 className='pt-3'>Sukebench</h1>
      <Tabs defaultActiveKey='cpu' id='uncontrolled-tab-example'>
        
        <Tab eventKey='cpu' title='CPU' className='p-2'>
          <h3>CPU</h3>
          <Cpu data={dummy.cpuDummyData} />
        </Tab>

        <Tab eventKey='memory' title='Memory' className='p-2'>
          <h3>Memory</h3>
          <Memory data={dummy.memoryDummyData} />
        </Tab>

        <Tab eventKey='swap' title='Swap' className='p-2'>
          <h3>Swap</h3>
          <Swap data={dummy.swapDummyData} />
        </Tab>

        <Tab eventKey='disks' title='Disks' className='p-2'>
          <h3>Disks</h3>
          <Disks data={dummy.disksDummyData} />
        </Tab>

        <Tab eventKey='network' title='Network' className='p-2'>
          <h3>Network</h3>
          <Network data={dummy.networkDummyData} />
        </Tab>

        <Tab eventKey='NetworkConnections' title='Network(Con)' className='p-2'>
          <h3>Network connections</h3>
          <NetworkConnections data={dummy.networkConnectionsDummyData} />
        </Tab>

        <Tab eventKey='processes' title='Processes' className='p-2'>
          <h3>Processes</h3>
          <Processes data={dummy.processesDummyData} />
        </Tab>

        <Tab eventKey='devices' title='Devices' className='p-2'>
          <h3>Devices</h3>
        </Tab>

      </Tabs>
    </main>
  </Container>
)

export default Home
