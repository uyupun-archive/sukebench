import {Nav} from 'react-bootstrap';

const BaseNav = props => {
  const {activeKey} = props;

  return <Nav variant="tabs" activeKey={activeKey} className='mb-3'>
    <Nav.Item>
      <Nav.Link href="/">CPU</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/memory">Memory</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/swap">Swap</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/disks">Disks</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/network">Network</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/networkConnections">Network(Con)</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/processes">Processes</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/devices">Devices</Nav.Link>
    </Nav.Item>
  </Nav>
};

export default BaseNav;
