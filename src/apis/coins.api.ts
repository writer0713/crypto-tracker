import { dummyCoins } from './data/coins.dummy';

const BASE_URL = 'https://api.coinpaprika.com/v1';

const fetchTop100Coins = async () => {
  try {
    const response = await fetch(`${BASE_URL}/coins/`);
    const json = await response.json();
    return json.slice(0, 100);
  } catch (e) {
    console.log(e);
    return dummyCoins;
  }
};

export default fetchTop100Coins;
