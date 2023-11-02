import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { currencyApi } from '../../utils/Api';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import CurrencyList from '../AllCurrencyList/AllCurrencyList';
import MainPage from '../MainPage/MainPage'

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
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage currencyList={currencyList} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
