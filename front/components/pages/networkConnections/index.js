import {Table} from 'react-bootstrap';
import TableRow from '../../table/row';

const getNetworkConnections = data => {
  const networkConnections = [];
  for (let networkConnection of data) {
    const localAddress = (networkConnection.local_ip_address && networkConnection.local_port_number)
      ? `IP: ${networkConnection.local_ip_address} / ポート: ${networkConnection.local_port_number}`
      : '-';
    const remoteAddress = (networkConnection.remote_ip_address && networkConnection.remote_port_number)
      ? `IP: ${networkConnection.remote_ip_address} / ポート: ${networkConnection.remote_port_number}`
      : '-';

    networkConnections.push(
      <Table striped bordered hover size="sm">
        <tbody>
          <TableRow head={'ファイルディスクリプタ'} body={networkConnection.file_descriptor} />
          <TableRow head={'アドレスファミリー'} body={networkConnection.address_family} />
          <TableRow head={'アドレスタイプ'} body={networkConnection.address_type} />
          <TableRow head={'ローカルアドレス'} body={localAddress} />
          <TableRow head={'リモートアドレス'} body={remoteAddress} />
          <TableRow head={'ステータス'} body={networkConnection.status} />
          <TableRow head={'プロセスID	'} body={networkConnection.pid} />
        </tbody>
      </Table>
    );
  }

  return networkConnections;
};

const NetworkConnections = props => {
  const {data} = props;

  return getNetworkConnections(data);
};

export {NetworkConnections};
