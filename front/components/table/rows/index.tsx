import * as React from "react";

interface Props {
  head: string;
  children: React.ReactNode;
}

const TableRows = (props: Props) => {
  const {head, children} = props;

  return <tr>
    <th className="p-2">{head}</th>
    <td className="p-2">{children}</td>
  </tr>
};

export default TableRows;
