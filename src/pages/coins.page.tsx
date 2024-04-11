import { useQuery } from '@tanstack/react-query';
import fetchTop100Coins from '../apis/coins.api';
import { CoinInterface } from '../types/coin';
import Coin from '../containers/coin.container';

export default function Coins() {
  const { isPending, data } = useQuery<CoinInterface[]>({
    queryKey: ['todos'],
    queryFn: fetchTop100Coins,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10">
      <h1 className="text-3xl font-bold mb-10">COINS</h1>
      {isPending
        ? 'loading'
        : data?.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </div>
  );
}
