import { Link } from 'react-router-dom';
import { CoinInterface } from '../types/coin';

export default function Coin({ coin }: { coin: CoinInterface }) {
  return (
    <Link to={`/coins/${coin.id}`}>
      <div
        key={coin.name}
        className="flex items-center space-x-5 mx-5 bg-zinc-100 text-black p-5 rounded-lg w-[350px] hover:bg-pink-200 active:bg-zinc-200 transition-colors duration-200"
      >
        <img
          src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
          className="w-8 h-8"
        />
        <p>{coin.name} &rarr;</p>
      </div>
    </Link>
  );
}
