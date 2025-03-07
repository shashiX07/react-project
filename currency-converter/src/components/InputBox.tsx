import { useId, ChangeEvent } from "react";

interface InputBoxProps {
  label: string;
  amount: number;
  onAmountChange?: (value: number) => void;
  onCurrencyChange?: (value: string) => void;
  currencyOptions: string[];
  selectCurrency: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
  className?: string;
}

export function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}: InputBoxProps) {
  const amountInputId = useId();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onAmountChange) {
      onAmountChange(Number(e.target.value));
    }
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onCurrencyChange) {
      onCurrencyChange(e.target.value);
    }
  };

  return (
    <div className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-3 rounded-lg text-sm flex ${className}`}>
      {/* Amount Section */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      {/* Currency Selection Section */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <input
          list="data-options"
          id="data-input"
          name="data-input"
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none placeholder-gray-500"
          placeholder="Search..."
          value={selectCurrency}
          onChange={handleCurrencyChange}
          disabled={currencyDisable}
        />
        <datalist id="data-options" className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
}