const BASE_URL = 'https://ohlcv-api.nomadcoders.workers.dev';

const fetchCoinHistory = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/?coinId=${coinId}`);
  return await response.json();
};

export default fetchCoinHistory;
