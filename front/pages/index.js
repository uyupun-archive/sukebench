import Head from 'next/head';
import {Container, Tab, Tabs} from 'react-bootstrap';
import Cpu from '../components/pages/cpu';

const cpuDummyData = {
  "clock_frequency": 2.4,
  "load_average": {
    "last_15_min": 3.0283203125,
    "last_1_min": 2.25048828125,
    "last_5_min": 2.65625
  },
  "logical_core_count": 4,
  "real_core_count": 2,
  "use_percent": 40.6
}

const Home = () => (
  <Container>
    <Head>
      <title>Sukebench</title>
    </Head>

    <main>
      <h1 className="pt-3">Sukebench</h1>
      <Tabs defaultActiveKey="cpu" id="uncontrolled-tab-example">
        
        <Tab eventKey="cpu" title="CPU" className="p-2">
          <h3>CPU</h3>
          <Cpu data={cpuDummyData} />
        </Tab>

        <Tab eventKey="memory" title="Memory" className="p-2">
          <h3>Memory</h3>
        </Tab>

        <Tab eventKey="swap" title="Swap" className="p-2">
          <h3>Swap</h3>
        </Tab>

        <Tab eventKey="disks" title="Disks" className="p-2">
          <h3>Disks</h3>
        </Tab>

        <Tab eventKey="network" title="Network" className="p-2">
          <h3>Network</h3>
        </Tab>

        <Tab eventKey="NetworkConnections" title="Network(Con)" className="p-2">
          <h3>Network connections</h3>
        </Tab>

        <Tab eventKey="processes" title="Processes" className="p-2">
          <h3>Processes</h3>
        </Tab>

        <Tab eventKey="devices" title="Devices" className="p-2">
          <h3>Devices</h3>
        </Tab>

      </Tabs>
    </main>
  </Container>
)

export default Home
