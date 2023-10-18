import React, { useEffect, useState } from 'react';
import { currencyApi } from '../../utils/Api';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import CurrencyList from '../CurrencyList/CurrencyList';
import './App.css';

import { CURRENCY_LIST } from '../../utils/constants';

function App() {
  const [usdRub, setUsdRub] = useState(97);
  const [currencyList, setCurrencyList] = useState(CURRENCY_LIST);

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   currencyApi.getCurrencyRates("USDRUB")
  //     .then((item) => {
  //       if (item && item.quotes && item.quotes.USDRUB) {
  //         setUsdRub(item.quotes.USDRUB);
  //       } else {
  //         console.error("Invalid response data");
  //       }
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   currencyApi.getCurrencyList()
  //     .then((list) => {
  //       console.log(list);
  //       setCurrencyList(list.currencies);
  //       localStorage.setItem('currencyList', JSON.stringify(list));

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className='root'>
      <main className='content'>
        <h1>Currency Converter</h1>

        <div>Курс доллара = {!loading ? usdRub + ' руб.' : 'Загрузка'}</div>
        <CurrencyInput currencyList={currencyList}/>
        {/* <CurrencyList currencyList={currencyList} /> */}
      </main>
    </div>
  );
}

export default App;
