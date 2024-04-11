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
    <div className="relative h-screen w-full flex flex-col items-center gap-10 px-10 py-20">
      <nav
        onClick={() => navigate('/coins')}
        className="fixed rounded-full p-5 size-12 flex justify-center items-center right-5 bottom-5 bg-slate-300 text-black font-semibold hover:bg-slate-500 hover:text-white duration-200 text-sm shadow-xl cursor-pointer"
      >
        Back
      </nav>
      {isCoinDetailsPending || isCoinPricePending ? (
        'loading'
      ) : (
        <>
          <h1 className="text-3xl font-bold">{coinDetails!.name}</h1>
          {/* rank symbol open source */}
          <div className="w-[350px] py-3 rounded-xl grid grid-cols-3 bg-slate-900 text-sm">
            <div className="flex flex-col justify-center items-center">
              <p>RANK:</p>
              <p>{coinDetails!.rank}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>SYMBOL:</p>
              <p>{coinDetails!.symbol}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>PRICE:</p>
              <p>{coinPrice!.quotes.USD.price.toFixed(3)}</p>
            </div>
          </div>

          {/* description */}
          <div className="w-[350px] h-40 overflow-y-scroll p-5">
            <p>{coinDetails!.description}</p>
          </div>

          {/* Supply */}
          <div className="w-[350px] py-3 rounded-xl grid grid-cols-2 justify-between bg-slate-900 text-sm">
            <div className="flex flex-col justify-center items-center">
              <p>TOTAL SUPPLY:</p>
              <p>{coinPrice!.total_supply}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>MAX SUPPLY:</p>
              <p>{coinPrice!.max_supply}</p>
            </div>
          </div>

          {/* tabs */}
          <div className="w-[350px] py-3 justify-between flex gap-5">
            <button
              className={
                'grow rounded-lg py-1 hover:bg-slate-600 active:bg-slate-700' +
                (matchId === '1-1' ? ' bg-slate-600' : ' bg-slate-900')
              }
            >
              <Link to={`/coins/${coinId}/chart`} className="block">
                CHART
              </Link>
            </button>

            <button
              className={
                'grow rounded-lg py-1 hover:bg-slate-600 active:bg-slate-700' +
                (matchId === '1-2' ? ' bg-slate-600' : ' bg-slate-900')
              }
            >
              <Link to={`/coins/${coinId}/price`} className="block">
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
