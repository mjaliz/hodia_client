import React from "react";
import Table from "./common/Table";

export class CurrenciesTable extends Table {
  state = {
    data: this.props.currencies,
  };

  componentDidMount() {
    console.log(this.state.data);
  }
  render() {
    return (
      <table className="table table-striped table-dark">
        {this.renderTableHeader(["#", "First", "Last", "Handle"])}
        {this.renderTableBody([["1", "Mark", "Otto", "@handle"]])}
      </table>
    );
  }
}

export default CurrenciesTable;
