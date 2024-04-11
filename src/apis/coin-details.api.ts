const BASE_URL = 'https://api.coinpaprika.com/v1';

const fetchCoinDetails = async (coinId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/coins/${coinId}`);
    return await response.json();
  } catch (e: any) {
    console.log(e);
  }
};

export default fetchCoinDetails;
