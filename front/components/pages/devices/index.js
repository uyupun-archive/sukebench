import {Table} from 'react-bootstrap';
import TableRow from '~/components/table/row';
import TableRows from '~/components/table/rows';

const getUsers = data => {
  const users = [];
  data.forEach((user, index) => {
    users.push(
      <Table key={index} striped bordered hover size="sm">
        <tbody>
          <TableRow head={'ユーザー名'} body={user.name} />
          <TableRow head={'端末'} body={user.terminal} />
          <TableRow head={'ホスト'} body={user.host ? user.host : '-'} />
          <TableRow head={'作成日時'} body={user.started_at} />
          <TableRow head={'ログインプロセスID'} body={user.login_process} />
        </tbody>
      </Table>
    );
  });

  return users;
};

const Devices = props => {
  const {data} = props;
  if (!Object.keys(data).length) return null;

  const battery = `${data.battery_percent} % （残り ${data.battery_secleft}）`;

  return <Table striped bordered hover size="sm">
    <tbody>
      <TableRows head={'ユーザー'}>{getUsers(data.users)}</TableRows>
      <TableRow head={'バッテリー残量'} body={battery} />
      <TableRow head={'充電'} body={data.battery_power_plugged ? 'True' : 'False'} />
      <TableRow head={'起動日時'} body={data.boot_time} />
      <TableRow head={'プラットフォーム'} body={data.platform_name} />
      <TableRow head={'バージョン'} body={data.platform_version} />
    </tbody>
  </Table>
};

export {Devices};
