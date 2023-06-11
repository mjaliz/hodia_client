import React from "react";
import Table from "../components/common/Table";
import { getCurrencies } from "../services/currencyService";

class CurrenciesScreen extends Table {
  state = {
    currencies: [],
  };

  async componentDidMount() {
    const { data } = await getCurrencies();
    const currencies = [];
    data.forEach((currency) => {
      currencies.push([
        currency["id"],
        currency["symbol"],
        currency["name"],
        currency["created_at"],
      ]);
    });
    this.setState({ currencies });
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 mx-auto">
          <h1 className="my-5">Currencies</h1>
          <table className="table table-striped table-dark">
            {this.renderTableHeader(["ID", "Symbol", "Name", "CreatedAt"])}
            {this.renderTableBody(this.state.currencies)}
          </table>
        </div>
      </div>
    );
  }
}

export default CurrenciesScreen;
