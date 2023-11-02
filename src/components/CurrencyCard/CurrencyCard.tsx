interface CurrencyCardProps {
  currencyCode: string;
  currencyName: string;
  currencyValue: string | number;
  selected: boolean;
  onClickCard: (currencyCode: string) => void;
}

function CurrencyCard({
  currencyCode,
  currencyName,
  currencyValue,
  selected,
  onClickCard,
}: CurrencyCardProps) {

  function handleCurrency() {
    onClickCard(currencyCode);
  }

  function roundToTwoDecimals(value: number) {
    let roundedValue = +value.toFixed(2); // Округляем до двух знаков после запятой
    let decimalCount = 0; // Счетчик знаков после запятой
    // Пока значение равно 0 и не достигнут предел знаков после запятой, продолжаем округлять
    while (roundedValue === 0 && decimalCount < 2) {
      decimalCount++;
      roundedValue = +value.toFixed(2 + decimalCount);
    }
    return roundedValue;
  }

  const displayValue = selected ? 'Выбрано' : typeof currencyValue === 'number' ? roundToTwoDecimals(currencyValue) : currencyValue;

  return (
    <div
      className={`currencyCard ${selected ? 'currencyCard_selected' : ''}`}
      onClick={handleCurrency}
    >
      <p className='currencyCard__code'>{currencyCode}</p>
      <p className='currencyCard__name'>{currencyName}</p>
      <p className='currencyCard__value'>{displayValue}</p>
    </div>
  );
}

export default CurrencyCard;
