// Currency.tsx
import React, { useEffect, useState } from 'react';
// import React, { Component } from 'react';

function CurrencyInput() {
  const [value, setValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // console.log(value);
  };

  const handleConvert = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(value);
  };

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
      <p className='currency_result'></p>
    </div>
  );
}

export default CurrencyInput;
