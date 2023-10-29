import React from 'react';

interface CurrencyCardProps {
  currencyCode: string;
  currencyName: string;
  currencyValue: number;
}

function CurrencyCard({ currencyCode, currencyName, currencyValue }: CurrencyCardProps) {
  return (
    <div className='currencyCard'>
      <p className='currencyCard__code'>{currencyCode}</p>
      <p className='currencyCard__name'>{currencyName}</p>
      <p className='currencyCard__value'>{currencyValue}</p>
    </div>
  );
}

export default CurrencyCard;
