const TableRowHalf = props => {
  const {head, body} = props;

  return <tr>
    <th className="p-2 w-50">{head}</th>
    <td className="p-2 w-50">{body}</td>
  </tr>
};

export default TableRowHalf;
