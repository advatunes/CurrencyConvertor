import React, { useEffect, useState } from 'react';
import { currencyApi } from '../../utils/Api';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import AllCurrencyList from '../AllCurrencyList/AllCurrencyList';
import { Routes, Route, BrowserRouter, NavLink, useLocation } from 'react-router-dom';
import { CURRENCY_LIST } from '../../utils/constants';

interface CurrencyListProps {
  currencyList: { [currencyCode: string]: string };
}

function MainPage({ currencyList }: CurrencyListProps) {
  const [usdRub, setUsdRub] = useState(97);
  // const [currencyList, setCurrencyList] = useState(CURRENCY_LIST);

  const [loading, setLoading] = useState(false);

  const location = useLocation();
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
    <main className='content'>
      <h1 className='title'>Валютный калькулятор</h1>
      {/* <div>Курс доллара = {!loading ? usdRub + ' руб.' : 'Загрузка'}</div> */}
      <CurrencyInput currencyList={currencyList} />
      {/* <NavLink to='/all-currencies' className='all__currencies'>
        Курсы валют
      </NavLink> */}
      <AllCurrencyList currencyList={currencyList} />
    </main>
  );
}

export default MainPage;
