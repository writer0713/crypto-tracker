import { useQuery } from '@tanstack/react-query';
import ApexChart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import fetchCoinHistory from '../../apis/coin-history.api';
import { useThemeStore } from '../../stores/theme.store';

export default function Chart() {
  const { coinId } = useParams();
  const { isDark } = useThemeStore();
  const { isPending, data } = useQuery<CoinHistory[]>({
    queryKey: ['history', coinId],
    queryFn: () => fetchCoinHistory(coinId!),
    refetchInterval: 5000,
  });

  if (data?.hasOwnProperty('error')) {
    return null;
  }

  return (
    <div>
      {isPending ? (
        'Loading...'
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: 'Price',
              data: data!.map((history) => {
                const x = new Date(history.time_open);
                const y = [
                  history.open,
                  history.high,
                  history.low,
                  history.close,
                ];
                return { x, y };
              }),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              type: 'candlestick',
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: { show: true },
            stroke: {
              width: 1,
            },
            yaxis: {
              show: true,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: true },
              type: 'datetime',
              categories: data?.map((price) => price.time_close),
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
