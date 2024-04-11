import { useOutletContext } from 'react-router-dom';
import { CoinPrice } from '../../types/coin-price';

export default function Price() {
  const { coinPrice } = useOutletContext<{ coinPrice: CoinPrice }>();
  const usd = coinPrice.quotes.USD;
  return (
    <div className="w-[350px] flex flex-col gap-3 h-40 overflow-y-scroll p-5">
      <p>▶ ath_date : {usd.ath_date}</p>
      <p>▶ ath_price : {usd.ath_price}</p>
      <p>▶ market_cap : {usd.market_cap}</p>
      <p>▶ market_cap_change_24h : {usd.market_cap_change_24h}</p>
      <p>▶ percent_change_1h : {usd.percent_change_1h}</p>
      <p>▶ percent_change_1y : {usd.percent_change_1y}</p>
      <p>▶ percent_change_6h : {usd.percent_change_6h}</p>
      <p>▶ percent_change_7d : {usd.percent_change_7d}</p>
      <p>▶ percent_change_12h : {usd.percent_change_12h}</p>
      <p>▶ percent_change_15m : {usd.percent_change_15m}</p>
      <p>▶ percent_change_24h : {usd.percent_change_24h}</p>
      <p>▶ percent_change_30d : {usd.percent_change_30d}</p>
      <p>▶ percent_change_30m : {usd.percent_change_30m}</p>
      <p>▶ percent_from_price_ath : {usd.percent_from_price_ath}</p>
      <p>▶ price : {usd.price}</p>
      <p>▶ volume_24h : {usd.volume_24h}</p>
      <p>▶ volume_24h_change_24h : {usd.volume_24h_change_24h}</p>
    </div>
  );
}
