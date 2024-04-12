import { useQuery } from '@tanstack/react-query';
import {
  Link,
  Outlet,
  useMatches,
  useNavigate,
  useParams,
} from 'react-router-dom';
import fetchCoinDetails from '../apis/coin-details.api';
import fetchCoinPrice from '../apis/coin-price.api';
import { CoinDetails } from '../types/coin-details';
import { CoinPrice } from '../types/coin-price';
import ThemeButton from '../components/theme-button';

export default function Coin() {
  const { coinId } = useParams();
  const matches = useMatches();
  const matchId = matches[1].id;
  const navigate = useNavigate();
  const { isPending: isCoinDetailsPending, data: coinDetails } =
    useQuery<CoinDetails>({
      queryKey: ['detail', coinId],
      queryFn: () => fetchCoinDetails(coinId!),
    });
  const { isPending: isCoinPricePending, data: coinPrice } =
    useQuery<CoinPrice>({
      queryKey: ['price', coinId],
      queryFn: () => fetchCoinPrice(coinId!),
    });

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen gap-10 px-10 py-20 dark:bg-dark dark:text-white">
      <button
        onClick={() => navigate('/crypto-tracker/coins')}
        className="fixed flex items-center justify-center p-5 text-sm font-semibold text-black duration-200 rounded-full shadow-xl cursor-pointer size-12 left-5 bottom-5 bg-slate-300 hover:bg-pink-400 hover:text-white"
      >
        Back
      </button>
      <ThemeButton />
      {isCoinDetailsPending || isCoinPricePending ? (
        'loading'
      ) : (
        <>
          <h1 className="text-3xl font-bold">{coinDetails!.name}</h1>
          {/* rank symbol open source */}
          <div className="w-[350px] py-3 rounded-xl grid grid-cols-3 bg-primary/80 dark:bg-secondary/80 text-sm">
            <div className="flex flex-col items-center justify-center">
              <p>RANK:</p>
              <p>{coinDetails!.rank}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>SYMBOL:</p>
              <p>{coinDetails!.symbol}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>PRICE:</p>
              <p>{coinPrice!.quotes.USD.price.toFixed(3)}</p>
            </div>
          </div>

          {/* description */}
          <div className="w-[350px] h-40 overflow-y-scroll p-5">
            <p>{coinDetails!.description}</p>
          </div>

          {/* Supply */}
          <div className="w-[350px] py-3 rounded-xl grid grid-cols-2 justify-between bg-primary/80 dark:bg-secondary/80 text-sm">
            <div className="flex flex-col items-center justify-center">
              <p>TOTAL SUPPLY:</p>
              <p>{coinPrice!.total_supply}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>MAX SUPPLY:</p>
              <p>{coinPrice!.max_supply}</p>
            </div>
          </div>

          {/* tabs */}
          <div className="w-[350px] py-3 justify-between flex gap-5">
            <button
              className={
                'grow rounded-lg py-1 hover:bg-pink-400 dark:hover:bg-secondary-600 active:bg-primary-700 dark:active:bg-primary-700' +
                (matchId === '1-1'
                  ? ' bg-pink-400/80'
                  : ' bg-primary/80 dark:bg-secondary/80')
              }
            >
              <Link
                to={`/crypto-tracker/coins/${coinId}/chart`}
                className="block"
              >
                CHART
              </Link>
            </button>

            <button
              className={
                'grow rounded-lg py-1 hover:bg-pink-400 dark:hover:bg-secondary-600 active:bg-primary-700 dark:active:bg-primary-700' +
                (matchId === '1-2'
                  ? ' bg-pink-400/80'
                  : ' bg-primary/80 dark:bg-secondary/80')
              }
            >
              <Link
                to={`/crypto-tracker/coins/${coinId}/price`}
                className="block"
              >
                PRICE
              </Link>
            </button>
          </div>

          <div className="pb-10">
            <Outlet
              context={
                { coinPrice } satisfies { coinPrice: CoinPrice | undefined }
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
