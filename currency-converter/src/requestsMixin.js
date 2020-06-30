const APIURL = "https://api.exchangeratesapi.io";
const OPEN_EXCHANGE_RATES_URL =
  "http://openexchangerates.org/api/currencies.json";
const axios = require("axios");

export const requestsMixin = {
  methods: {
    getCurrenciesList() {
      return axios.get(OPEN_EXCHANGE_RATES_URL);
    },

    getExchangeRates(baseCurrency) {
      return axios.get(`${APIURL}/latest?base=${baseCurrency}`);
    },
  },
};
