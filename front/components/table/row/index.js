const TableRow = props => {
  const {head, body, width} = props;

  return <tr>
    {
      width
        ? <>
          <th className="p-2" width={`${width}%`}>{head}</th>
          <td className="p-2" width={`${100 - width}%`}>{body}</td>
        </>
        : <>
          <th className="p-2">{head}</th>
          <td className="p-2">{body}</td>
        </>
    }
  </tr>
};

export default TableRow;
