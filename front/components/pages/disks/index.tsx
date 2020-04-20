import {Table} from 'react-bootstrap';
import TableRow from '~/components/table/row';
import TableRows from '~/components/table/rows';
import {IDisks} from "~/interfaces";

interface Props {
  data: IDisks;
}

const getPartitions = data => {
  const partitions = [];
  data.partitions.forEach((partition, index) => {
    partitions.push(
      <Table key={index} striped bordered hover size="sm">
        <tbody>
          <TableRow head={'デバイス'} body={partition.device} width={30} />
          <TableRow head={'マウントポイント'} body={partition.mountpoint} width={30} />
          <TableRow head={'ファイルシステム'} body={partition.filesystem} width={30} />
          <TableRow head={'オプション'} body={partition.options.join(' ')} width={30} />
        </tbody>
      </Table>
    );
  });

  return partitions;
};

const Disks = (props: Props) => {
  const {data} = props;

  const reading = `${data.read_count} 回 / ${data.read_bytes} B`;
  const writing = `${data.write_count} 回 / ${data.write_bytes} B`;

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRow head={'容量（/）'} body={`${data.total} GB`} />
      <TableRow head={'空き容量（/）'} body={`${data.free} GB`} />
      <TableRow head={'使用量（/）'} body={`${data.used} GB`} />
      <TableRow head={'使用率（/）'} body={`${data.use_percent} %`} />
      <TableRows head={'パーティション'}>{getPartitions(data)}</TableRows>
      <TableRow head={'読み込み（/）'} body={reading} />
      <TableRow head={'書き込み（/）'} body={writing} />
    </tbody>
  </Table>
};

export {Disks};
