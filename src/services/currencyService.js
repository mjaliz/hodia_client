import http from "./httpService";
import config from "../config.json";

export function getCurrencies() {
  return http.get(`${config.apiEndpoint}/currencies`);
}

export function getCurrency(currency_id) {
  return http.get(`${config.apiEndpoint}/currencies/${currency_id}`);
}
