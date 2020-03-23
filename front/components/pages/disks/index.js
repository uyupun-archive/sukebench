import {Table} from 'react-bootstrap';
import TableRow from '../../table/row';
import TableRows from '../../table/rows';

const Disks = props => {
  const {data} = props;
  const reading = `${data.read_count} 回 / ${data.read_bytes} B`;
  const writing = `${data.write_count} 回 / ${data.write_bytes} B`;

  const getPartitions = () => {
    const partitions = [];
    for (let partition of data.partitions) {
      partitions.push(
        <Table striped bordered hover size="sm">
          <TableRow head={'デバイス'} body={partition.device} />
          <TableRow head={'マウントポイント'} body={partition.mountpoint} />
          <TableRow head={'ファイルシステム'} body={partition.filesystem} />
          <TableRow head={'オプション'} body={partition.options.join(' ')} />
        </Table>
      );
    }

    return partitions;
  };

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRow head={'容量（/）'} body={`${data.total} GB`} />
      <TableRow head={'空き容量（/）'} body={`${data.free} GB`} />
      <TableRow head={'使用量（/）'} body={`${data.used} GB`} />
      <TableRow head={'使用率（/）'} body={`${data.use_percent} %`} />
      <TableRows head={'パーティション'}>{getPartitions()}</TableRows>
      <TableRow head={'読み込み（/）'} body={reading} />
      <TableRow head={'書き込み（/）'} body={writing} />
    </tbody>
  </Table>
};

export {Disks};
