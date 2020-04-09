import {Table} from 'react-bootstrap';
import TableRow from '~/components/table/row';

interface Props {
  data: any[]
}

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
          <TableRow head={'ファイルディスクリプタ'} body={networkConnection.file_descriptor} width={50} />
          <TableRow head={'アドレスファミリー'} body={networkConnection.address_family} width={50} />
          <TableRow head={'アドレスタイプ'} body={networkConnection.address_type} width={50} />
          <TableRow head={'ローカルアドレス'} body={localAddress} width={50} />
          <TableRow head={'リモートアドレス'} body={remoteAddress} width={50} />
          <TableRow head={'ステータス'} body={networkConnection.status} width={50} />
          <TableRow head={'プロセスID	'} body={networkConnection.pid} width={50} />
        </tbody>
      </Table>
    );
  });

  return networkConnections;
};

const NetworkConnections = (props: Props) => {
  const {data} = props;
  if (!data.length) return null;

  return <>
    {
      getNetworkConnections(data)
    }
  </>;
};

export {NetworkConnections};
