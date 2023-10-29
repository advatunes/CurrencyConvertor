const endpointRates = 'live';
const endpointList = 'list';
const endpointConvert = 'convert';
const access_key = 'ff0a96de8f61e115a2ce609ba794bd46';
const baseUrl = 'http://apilayer.net/api/';
const baseUrl1 = 'api.currencylayer.com/';

class CurrencyApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getCurrencyRatesAll() {
    return this._request(
      `${this.baseUrl}` + `${endpointRates}` + '?access_key=' + `${access_key}`,
      {
        method: 'GET',
      }
    );
  }

  getCurrencyRates(from, to, amount) {
    return this._request(
      `${this.baseUrl}` +
        `${endpointConvert}` +
        '?access_key=' +
        `${access_key}` +
        '&from=' +
        `${from}` +
        '&to=' +
        `${to}` +
        '&amount=' +
        `${amount}`,
      {
        method: 'GET',
      }
    );
  }

  getCurrencyList() {
    return this._request(`${this.baseUrl}` + `${endpointList}` + '?access_key=' + `${access_key}`, {
      method: 'GET',
    });
  }

  getLive(source) {
    return this._request(
      `${this.baseUrl}` +
        `${endpointRates}` +
        '?access_key=' +
        `${access_key}${source ? `&source=${source}` : ''}`,
      {
        method: 'GET',
      }
    );
  }
}

export const currencyApi = new CurrencyApi({
  baseUrl: baseUrl,
  dataType: 'jsonp',
  headers: {
    'Content-Type': 'application/json',
  },
});
