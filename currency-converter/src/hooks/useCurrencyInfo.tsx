import { useEffect, useState } from "react";

interface CurrencyMap {
  [key: string]: number;
}

export default function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<CurrencyMap>({});

  useEffect(() => {
    const normalizedCurrency = currency.toLowerCase();
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${normalizedCurrency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        const newData = res[normalizedCurrency] as CurrencyMap;
        setData(newData);
        console.log("Fetched Data:", newData);
      })
      .catch((err) => console.error("Currency fetch error:", err));
  }, [currency]);

  return data;
}