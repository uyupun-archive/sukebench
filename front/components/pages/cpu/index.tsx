import {Table} from 'react-bootstrap';
import TableRow from '~/components/table/row';

interface Props {
  data: any
}

const Cpu = (props: Props) => {
  const {data} = props;
  if (!Object.keys(data).length) return null;

  const loadAverage =
    `過去１分: ${data.load_average.last_1_min} / 過去５分: ${data.load_average.last_5_min} / 過去15分: ${data.load_average.last_15_min}`;

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRow head={'使用率'} body={`${data.use_percent} %`} />
      <TableRow head={'ロードアベレージ'} body={loadAverage} />
      <TableRow head={'物理コア数'} body={data.real_core_count} />
      <TableRow head={'論理コア数'} body={data.logical_core_count} />
      <TableRow head={'クロック周波数'} body={`${data.clock_frequency} GHz`} />
    </tbody>
  </Table>
};

export {Cpu};
