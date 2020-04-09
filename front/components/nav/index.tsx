import Link from 'next/link';

interface Props {
  activeKey: string
}

const Nav = (props: Props) => {
  const {activeKey} = props;

  return <ul className="nav nav-tabs mb-2">
    <li className="nav-item">
      <Link href="/">
        <a className={`nav-link ${activeKey === 'cpu' ? 'active' : ''}`}>Cpu</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/memory">
        <a className={`nav-link ${activeKey === 'memory' ? 'active' : ''}`}>Memory</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/swap">
        <a className={`nav-link ${activeKey === 'swap' ? 'active' : ''}`}>Swap</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/disks">
        <a className={`nav-link ${activeKey === 'disks' ? 'active' : ''}`}>Disks</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/network">
        <a className={`nav-link ${activeKey === 'network' ? 'active' : ''}`}>Network</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/networkConnections">
        <a className={`nav-link ${activeKey === 'networkConnections' ? 'active' : ''}`}>Network(Con)</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/processes">
        <a className={`nav-link ${activeKey === 'processes' ? 'active' : ''}`}>Processes</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/devices">
        <a className={`nav-link ${activeKey === 'devices' ? 'active' : ''}`}>Devices</a>
      </Link>
    </li>
  </ul>
};

export default Nav;
