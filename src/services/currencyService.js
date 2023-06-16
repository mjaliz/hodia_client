import http from "./httpService";
import config from "../config.json";

export function getCurrencies(filter) {
  return http.get(`${config.apiEndpoint}/currencies/?filter=${filter}`);
}

export function getCurrency(currency_id) {
  return http.get(`${config.apiEndpoint}/currencies/${currency_id}`);
}
