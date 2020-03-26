const getTableColumn = body => {
  const columns = [];
  let counter = 0;
  for (let key in body) {
    columns.push(
      <td key={counter++} className="p-2">{body[key]}</td>
    );
  }

  return columns;
};

const TableColumn = props => {
  const {body} = props;

  return getTableColumn(body);
};

export default TableColumn;
