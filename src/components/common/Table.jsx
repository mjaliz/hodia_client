import React, { Component } from "react";

export class Table extends Component {
  state = {
    data: {},
  };
  renderTableHeader = (headers) => {
    return (
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th scope="col">{header}</th>
          ))}
        </tr>
      </thead>
    );
  };
  renderTableBody = (body) => {
    return (
      <tbody>
        {body.map((row, i) => {
          return (
            <tr>
              {row.map((item, j) => {
                return <td>{item}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
}

export default Table;
