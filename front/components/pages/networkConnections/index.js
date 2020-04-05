import {Table} from 'react-bootstrap';
import TableRowHalf from '~/components/table/rowHalf';

const getNetworkConnections = data => {
  const networkConnections = [];
  data.forEach((networkConnection, index) => {
    const localAddress = (networkConnection.local_ip_address && networkConnection.local_port_number)
      ? `IP: ${networkConnection.local_ip_address} / ポート: ${networkConnection.local_port_number}`
      : '-';
    const remoteAddress = (networkConnection.remote_ip_address && networkConnection.remote_port_number)
      ? `IP: ${networkConnection.remote_ip_address} / ポート: ${networkConnection.remote_port_number}`
      : '-';

    networkConnections.push(
      <Table key={index} striped bordered hover size="sm">
        <tbody>
          <TableRowHalf head={'ファイルディスクリプタ'} body={networkConnection.file_descriptor} />
          <TableRowHalf head={'アドレスファミリー'} body={networkConnection.address_family} />
          <TableRowHalf head={'アドレスタイプ'} body={networkConnection.address_type} />
          <TableRowHalf head={'ローカルアドレス'} body={localAddress} />
          <TableRowHalf head={'リモートアドレス'} body={remoteAddress} />
          <TableRowHalf head={'ステータス'} body={networkConnection.status} />
          <TableRowHalf head={'プロセスID	'} body={networkConnection.pid} />
        </tbody>
      </Table>
    );
  });

  return networkConnections;
};

const NetworkConnections = props => {
  const {data} = props;
  if (!data.length) return null;

  return getNetworkConnections(data);
};

export {NetworkConnections};
