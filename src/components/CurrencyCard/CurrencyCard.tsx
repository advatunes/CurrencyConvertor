import React from 'react';

interface CurrencyCardProps {
  currencyCode: string;
  currencyName: string;
}

function CurrencyCard({ currencyCode, currencyName }: CurrencyCardProps) {
  return (
    <div className='currencyCard'>
      <p className='currencyCard__code'>{currencyCode}</p>
      <p className='currencyCard__name'>{currencyName}</p>
    </div>
  );
}

export default CurrencyCard;
