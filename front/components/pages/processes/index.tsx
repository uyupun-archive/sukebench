import {Table} from 'react-bootstrap';
import TableColumn from '~/components/table/column';
import {IProcesses} from "~/interfaces";

interface Props {
  data: IProcesses[];
}

const getProcesses = data => {
  const processes = [];
  data.forEach((process, index) => {
    processes.push(
      <tr key={index}>
        <TableColumn body={process} />
      </tr>
    );
  });

  return processes;
};

const Processes = (props: Props) => {
  const {data} = props;

  return <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th className="p-2">プロセスID</th>
        <th className="p-2">プロセス名</th>
        <th className="p-2">実行ユーザー</th>
      </tr>
    </thead>
    <tbody>
      {getProcesses(data)}
    </tbody>
  </Table>
};

export {Processes};
