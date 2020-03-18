const TableRow = props => {
  const {head, body} = props;

  return <tr>
    <th className="p-2">{head}</th>
    <td className="p-2">{body}</td>
  </tr>
};

export default TableRow;
