import {Table} from 'react-bootstrap';
import TableRow from '../../table/row';
import TableRows from '../../table/rows';

const Network = props => {
  const {data} = props;
  const send = `${data.bytes_sent} B / ${data.packets_sent} パケット`;
  const receive = `${data.bytes_recv} B / ${data.packets_recv} パケット`;
  const error = `イン: ${data.packets_errin} / アウト: ${data.packets_errout}`;
  const drop = `イン: ${data.packets_dropin} / アウト: ${data.packets_dropout}`;

  const checkNull = value => {
    return value ? value : '-';
  };

  const getLogicalAddrs = key => {
    const logicalAddrs = [];
    for (let item of data.logical_addrs[key]) {
      logicalAddrs.push(
        <Table striped bordered hover size="sm">
          <TableRow head={'アドレスファミリー'} body={checkNull(item.address_family)} />
          <TableRow head={'IPアドレス（ユニキャスト）'} body={checkNull(item.ip_address)} />
          <TableRow head={'ネットマスク'} body={checkNull(item.netmask)} />
          <TableRow head={'ブロードキャストアドレス'} body={checkNull(item.broadcast_address)} />
          <TableRow head={'VPN'} body={checkNull(item.vpn)} />
          <TableRow head={'NIC'} body={checkNull(data.interface_stats[key].isup)} />
          <TableRow head={'通信方式'} body={checkNull(data.interface_stats[key].duplex)} />
          <TableRow head={'速度'} body={checkNull(data.interface_stats[key].speed)} />
          <TableRow head={'MTU'} body={checkNull(data.interface_stats[key].mtu)} />
        </Table>
      );
    }

    return logicalAddrs;
  };

  const getInterfaces = () => {
    const interfaces = [];
    for (let key in data.logical_addrs) {
      interfaces.push(
        <>
          <li>インタフェース: {key}</li>
          <Table striped bordered hover size="sm">
            <TableRow head={'MACアドレス'} body={checkNull(data.physical_addrs[key].address)} />
            <TableRow head={'ベンダ'} body={checkNull(data.physical_addrs[key].vendor)} />
          </Table>
          {getLogicalAddrs(key)}
        </>
      );
    }

    return interfaces;
  };

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRow head={'送信'} body={send} />
      <TableRow head={'受信'} body={receive} />
      <TableRow head={'エラー'} body={error} />
      <TableRow head={'ドロップ'} body={drop} />
      <TableRows head={'インタフェ-ス'}>
        <ul>{getInterfaces()}</ul>
      </TableRows>
    </tbody>
  </Table>
};

export {Network};
