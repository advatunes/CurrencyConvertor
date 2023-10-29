import React, { useEffect, useState } from 'react';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import { currencyApi } from '../../utils/Api';

interface AllCurrencyListProps {
  currencyList: { [currencyCode: string]: string };
}

function AllCurrencyList({ currencyList }: AllCurrencyListProps) {
  const currencyArray = Object.entries(currencyList);

  const [exchangeRates, setExchangeRates] = useState('');
  const exchangeRatesArray = Object.entries(exchangeRates);

  useEffect(() => {
    currencyApi
      .getLive()
      .then((item) => {
        setExchangeRates(item.quotes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const resultArray = [];

  for (let i = 0; i < exchangeRatesArray.length; i++) {
    if (exchangeRatesArray[i][0].substring(3) === currencyArray[i][0]) {
      resultArray.push([currencyArray[i][0], currencyArray[i][1], exchangeRatesArray[i][1]]);
    }
  }

  return (
    <div className='curencyList'>
      {resultArray.map((card) => (
        <CurrencyCard
          key={card[0]}
          currencyCode={card[0]}
          currencyName={card[1]}
          currencyValue={Math.round(+card[2]* 100) / 100}
        />
      ))}
    </div>
  );
}

export default AllCurrencyList;
