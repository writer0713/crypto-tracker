const BASE_URL = 'https://api.coinpaprika.com/v1';

const fetchCoinPrice = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  return await response.json();
};

export default fetchCoinPrice;
