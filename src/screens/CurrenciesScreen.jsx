import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/common/Table";
import { getCurrencies } from "../services/currencyService";
import InputSelect from "../components/common/InputSelect";

const CurrenciesScreen = () => {
  const [currencies, setCurrencies] = useState([]);
  const [filter, setFilter] = useState("all");
  console.log(filter);

  useEffect(() => {
    async function fetchCurrencies() {
      const { data } = await getCurrencies(filter);
      const currencies = [];
      data.forEach((currency) => {
        currencies.push([
          currency["id"],
          <Link to={`${currency["name"]}`} style={{ textDecoration: "none" }}>
            {currency["symbol"]}
          </Link>,
          currency["name"],
          currency["created_at"],
        ]);
      });
      setCurrencies(currencies);
    }
    fetchCurrencies();
  }, [filter]);
  return (
    <div className="row">
      <div className="col-12 mx-auto">
        <h1 className="my-5">Currencies</h1>
        <form className="mb-4">
          <div className="form-group">
            <select
              className="form-control"
              id="formSelect"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              value={filter}
            >
              <option value="all">All currencies</option>
              <option value="new_closing_highs">New closing highs</option>
            </select>
          </div>
        </form>
        <Table
          headers={["ID", "Symbol", "Name", "Created At"]}
          body={currencies}
        />
      </div>
    </div>
  );
};

export default CurrenciesScreen;
