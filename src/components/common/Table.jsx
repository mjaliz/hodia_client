import React from "react";

const Table = ({ headers, body }) => {
  const renderTableHeader = (headers) => {
    return (
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th scope="col" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  };
  const renderTableBody = (body) => {
    return (
      <tbody>
        {body.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((item, j) => {
                return <td key={j}>{item}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  return (
    <table className="table table-striped table-dark">
      {renderTableHeader(headers)}
      {renderTableBody(body)}
    </table>
  );
};

export default Table;
