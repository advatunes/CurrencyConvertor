import React, { useEffect, useState } from 'react';
import CurrencyCard from "../CurrencyCard/CurrencyCard"

interface CurrencyListProps {
  currencyList: { [currencyCode: string]: string };
}

function CurrencyList({ currencyList }: CurrencyListProps) {
  const currencyArray = Object.entries(currencyList);

  return (
    <div className='curencyList'>
      {currencyArray.map((card) => (
        <CurrencyCard key={card[0]} currencyCode={card[0]} currencyName={card[1]} />
      ))}
    </div>
  );

}

export default CurrencyList;
