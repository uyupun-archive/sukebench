const TableRows = props => {
  const {head, children} = props;

  return <tr>
    <th className="p-2">{head}</th>
    <td className="p-2">{children}</td>
  </tr>
};

export default TableRows;
