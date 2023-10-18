import React, { useEffect, useState } from 'react';
import { currencyApi } from '../../utils/Api';

interface CurrencyListProps {
  currencyList: { [currencyCode: string]: string };
}

function CurrencyInput({ currencyList }: CurrencyListProps) {
  const [value, setValue] = useState('');
  const [amountToConvert, setAmountToConvert] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');

  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);

  const currencyArray = Object.entries(currencyList);

  function convertCurrency() {
    currencyApi
      .getCurrencyRates(fromCurrency, toCurrency, amountToConvert)
      .then((item) => {
        setResult(item.result.toFixed(2));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleConvert = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputError('');
    setLoading(true);
    const result = value
      .toUpperCase()
      .split(' ')
      .filter((word) => {
        return currencyArray.some((currency) => currency[0] === word);
      });

    const match = value.match(/\d+/);

    if (result.length === 2 && match) {
      setAmountToConvert(+match);
      setFromCurrency(result[0]);
      setToCurrency(result[1]);
      setLoading(false);
    } else {
      setInputError(
        'Неправильный формат ввода. Пожалуйста, введите запрос в формате "Сумма ВАЛЮТА1 в ВАЛЮТА2". Например, "15 USD in RUB".'
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fromCurrency && toCurrency && amountToConvert !== 0) {
      convertCurrency();
    }
  }, [fromCurrency, toCurrency, amountToConvert]);

  return (
    <div className='currency__wrap'>
      <form className='currency__form'>
        <input
          className='currency__input'
          type='text'
          onChange={handleInput}
          placeholder='Введите запрос, например 15 usd in rub'
        />
        <button className='currency__button' onClick={handleConvert}>
          Конвертировать
        </button>
      </form>
      {inputError ? (
        <p className='currency__error'>{inputError}</p>
      ) : (
        <p className='currency__result'>{!loading ? result + ' ' + toCurrency : 'Загрузка'}</p>
      )}
    </div>
  );
}

export default CurrencyInput;
