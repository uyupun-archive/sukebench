interface Props {
  head: any,
  body: any,
  width?: any
}

const TableRow = (props: Props) => {
  const {head, body, width} = props;

  return <tr>
    {
      width
        ? <>
          <th className="p-2" style={{width: `${width}%`}}>{head}</th>
          <td className="p-2" style={{width: `${100 - width}%`}}>{body}</td>
        </>
        : <>
          <th className="p-2">{head}</th>
          <td className="p-2">{body}</td>
        </>
    }
  </tr>
};

export default TableRow;
