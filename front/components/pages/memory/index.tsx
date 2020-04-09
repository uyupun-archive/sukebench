import {Table} from 'react-bootstrap';
import TableRow from '~/components/table/row';

interface Props {
  data: any
}

const Memory = (props: Props) => {
  const {data} = props;
  if (!Object.keys(data).length) return null;

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRow head={'容量'} body={`${data.total} GB`} />
      <TableRow head={'空き容量'} body={`${data.available} GB`} />
      <TableRow head={'使用量'} body={`${data.used} GB`} />
    </tbody>
  </Table>
};

export {Memory};
