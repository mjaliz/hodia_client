import React, { useEffect, useState } from "react";
import Table from "../components/common/Table";
import { getCurrency } from "../services/currencyService";
import { useParams } from "react-router-dom";
import TradingViewWidget from "../components/TradingViewWidget";

const CurrencyPriceScreen = () => {
  const [currencyPrices, setCurrencyPrices] = useState([]);
  const { currency_name } = useParams();
  const currencyName = currency_name.replace("-", "");

  useEffect(() => {
    async function fetchCurrencyPrices() {
      const { data } = await getCurrency(currency_name);
      const currencyPrices = [];
      data.forEach((currency) => {
        currencyPrices.push([
          currency["date"],
          currency["open"],
          currency["high"],
          currency["low"],
          currency["close"],
          currency["volume"],
        ]);
      });
      setCurrencyPrices(currencyPrices);
    }
    fetchCurrencyPrices();
  }, [currency_name]);
  return (
    <div className="row">
      <div className="col-12 mx-auto">
        <TradingViewWidget currencyName={currencyName} />
        <h1 className="my-5">Prices</h1>
        <Table
          headers={["Date", "Open", "High", "Low", "Close", "Volume"]}
          body={currencyPrices}
        />
      </div>
    </div>
  );
};

export default CurrencyPriceScreen;
