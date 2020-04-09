interface Props {
  head: any,
  children: any,
}

const TableRows = (props: Props) => {
  const {head, children} = props;

  return <tr>
    <th className="p-2">{head}</th>
    <td className="p-2">{children}</td>
  </tr>
};

export default TableRows;
