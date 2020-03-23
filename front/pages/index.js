import Head from 'next/head';
import {Container, Tab, Tabs} from 'react-bootstrap';
import {Cpu, Memory, Swap, Disks} from '../components/pages/index';

const cpuDummyData = {
  'use_percent': 40.6,
  'load_average': {
    'last_15_min': 3.0283203125,
    'last_1_min': 2.25048828125,
    'last_5_min': 2.65625
  },
  'real_core_count': 2,
  'logical_core_count': 4,
  'clock_frequency': 2.4
}

const memoryDummyData = {
  'total': 17.179869184,
  'available': 6.51087872,
  'used': 9.543540736
};

const swapDummyData = {
  'total': 3.221225472,
  'free': 1.757413376,
  'used': 1.463812096
};

const disksDummyData = {
  'total': 499.963174912,
  'free': 70.968365056,
  'used': 10.985254912,
  'use_percent': 13.4,
  'partitions': [
    {
      'device': '/dev/disk1s5',
      'mountpoint': '/',
      'filesystem': 'apfs',
      'options': [
        "ro",
        "local",
        "rootfs",
        "dovolfs",
        "journaled",
        "multilabel"
      ]
    },
    {
      'device': '/dev/disk1s5',
      'mountpoint': '/',
      'filesystem': 'apfs',
      'options': [
        "ro",
        "local",
        "rootfs",
        "dovolfs",
        "journaled",
        "multilabel"
      ]
    },
    {
      'device': '/dev/disk1s5',
      'mountpoint': '/',
      'filesystem': 'apfs',
      'options': [
        "ro",
        "local",
        "rootfs",
        "dovolfs",
        "journaled",
        "multilabel"
      ]
    }
  ],
  'read_count': 6174919,
  'read_bytes': 440117825732608,
  'write_count': 5558551,
  'write_bytes': 183641661
};

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
          <Memory data={memoryDummyData} />
        </Tab>

        <Tab eventKey="swap" title="Swap" className="p-2">
          <h3>Swap</h3>
          <Swap data={swapDummyData} />
        </Tab>

        <Tab eventKey="disks" title="Disks" className="p-2">
          <h3>Disks</h3>
          <Disks data={disksDummyData} />
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
