import {Table} from 'react-bootstrap';
import TableRow from '~/components/table/row';
import TableRows from '~/components/table/rows';

interface Props {
  data: any
}

const checkNull = value => {
  return value ? value : '-';
};

const getLogicalAddrs = data => {
  const logicalAddrs = [];
  data.forEach((item, index) => {
    logicalAddrs.push(
      <Table key={index} striped bordered hover size="sm">
        <tbody>
          <TableRow head={'アドレスファミリー'} body={checkNull(item.address_family)} width={50} />
          <TableRow head={'IPアドレス（ユニキャスト）'} body={checkNull(item.ip_address)} width={50} />
          <TableRow head={'ネットマスク'} body={checkNull(item.netmask)} width={50} />
          <TableRow head={'ブロードキャストアドレス'} body={checkNull(item.broadcast_address)} width={50} />
          <TableRow head={'VPN'} body={checkNull(item.vpn)} />
        </tbody>
      </Table>
    );
  });

  return logicalAddrs;
};

const getInterfaces = data => {
  const interfaces = [];
  let counter = 0;
  for (let key in data.logical_addrs) {
    interfaces.push(
      <li key={counter++}>
        <div>インタフェース: {key}</div>
        <Table striped bordered hover size="sm">
          <tbody>
            <TableRow head={'MACアドレス'} body={checkNull(data.physical_addrs[key].address)} width={50} />
            <TableRow head={'ベンダ'} body={checkNull(data.physical_addrs[key].vendor)} width={50} />
            <TableRow head={'NIC'} body={checkNull(data.interface_stats[key].isup)} width={50} />
            <TableRow head={'通信方式'} body={checkNull(data.interface_stats[key].duplex)} width={50} />
            <TableRow head={'速度'} body={checkNull(data.interface_stats[key].speed)} width={50} />
            <TableRow head={'MTU'} body={checkNull(data.interface_stats[key].mtu)} width={50} />
          </tbody>
        </Table>
        {getLogicalAddrs(data.logical_addrs[key])}
      </li>
    );
  }

  return interfaces;
};

const Network = (props: Props) => {
  const {data} = props;
  if (!Object.keys(data).length) return null;

  const send = `${data.bytes_sent} B / ${data.packets_sent} パケット`;
  const receive = `${data.bytes_recv} B / ${data.packets_recv} パケット`;
  const error = `イン: ${data.packets_errin} / アウト: ${data.packets_errout}`;
  const drop = `イン: ${data.packets_dropin} / アウト: ${data.packets_dropout}`;

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRow head={'送信'} body={send} />
      <TableRow head={'受信'} body={receive} />
      <TableRow head={'エラー'} body={error} />
      <TableRow head={'ドロップ'} body={drop} />
      <TableRows head={'インタフェース'}>
        <ul>{getInterfaces(data)}</ul>
      </TableRows>
    </tbody>
  </Table>
};

export {Network};
