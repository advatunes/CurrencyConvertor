import React, { useEffect, useState } from 'react';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import { currencyApi } from '../../utils/Api';

interface AllCurrencyListProps {
  currencyList: { [currencyCode: string]: string };
}

function AllCurrencyList({ currencyList }: AllCurrencyListProps) {
  const [currencyCode, setCurrencyCode] = useState('USD');
  const [loading, setLoading] = useState(false);
  const [exchangeRates, setExchangeRates] = useState({});
  const [resultArray, setResultArray] = useState<[string, string, number][]>([]);

  const handleCardClick = (currencyCode: string) => {
    setCurrencyCode(currencyCode);
    setLoading(true);
    currencyApi
      .getLive(currencyCode)
      .then((item) => {
        if (item && item.quotes) {
          setExchangeRates(item.quotes);
          setLoading(false);
        } else {
          console.error('Received unexpected data from API');
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

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

  useEffect(() => {
    if (Object.keys(exchangeRates).length > 0) {
      const exchangeRatesArray: [string, number][] = Object.entries(exchangeRates);
      const currencyArray: [string, string][] = Object.entries(currencyList);

      const updatedResultArray: [string, string, number][] = currencyArray.map(([code, name]) => {
        const rate = exchangeRatesArray.find(
          ([exchangeCode]) => exchangeCode.substring(3) === code
        );
        if (rate) {
          return [code, name, rate[1]];
        }

        return [code, name, 0];
      });

      setResultArray(updatedResultArray);
    }
  }, [exchangeRates, currencyList]);

  return (
    <>
      <div className='currentCurr'>
        <p className='currentCurr__text'>
          Текущая валюта: <button className='currentCurr__button'>{currencyCode}</button>
        </p>
        <p className='currentCurr__text'>Для выбора другой валюты нажмите на карточку</p>
      </div>
      <div className='curencyList'>
        {resultArray.length > 0 ? (
          resultArray.map((card) => (
            <CurrencyCard
              key={card[0]}
              currencyCode={card[0]}
              currencyName={card[1]}
              currencyValue={loading ? 'Загрузка..' : card[2]}
              selected={card[0] === currencyCode}
              onClickCard={handleCardClick}
            />
          ))
        ) : (
          <p>Загрузка данных...</p>
        )}
      </div>
    </>
  );
}

export default AllCurrencyList;
