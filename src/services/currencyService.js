import http from "./httpService";
import config from "../config.json";

export function getCurrencies() {
  return http.get(`${config.apiEndpoint}/currency`);
}
