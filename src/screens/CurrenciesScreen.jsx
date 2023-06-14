import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/common/Table";
import { getCurrencies } from "../services/currencyService";

const CurrenciesScreen = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      const { data } = await getCurrencies();
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
  }, []);
  return (
    <div className="row">
      <div className="col-12 mx-auto">
        <h1 className="my-5">Currencies</h1>
        <Table
          headers={["ID", "Symbol", "Name", "Created At"]}
          body={currencies}
        />
      </div>
    </div>
  );
};

export default CurrenciesScreen;
