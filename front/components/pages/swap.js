import {Table} from 'react-bootstrap';
import TableRow from '../table/row';

const Swap = props => {
  const {data} = props;

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRow head={'容量'} body={`${data.total} GB`} />
      <TableRow head={'空き容量'} body={`${data.free} GB`} />
      <TableRow head={'使用量'} body={`${data.used} GB`} />
    </tbody>
  </Table>
};

export {Swap};
