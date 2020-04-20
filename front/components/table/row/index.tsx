import * as React from "react";

interface Props {
  head: string;
  body: React.ReactNode;
  width?: number;
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
