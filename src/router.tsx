import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Coins from './pages/coins.page';
import Coin from './pages/coin.page';
import Chart from './pages/tabs/chart.page';
import Price from './pages/tabs/price.page';

const router = createBrowserRouter([
  {
    path: '/crypto-tracker/',
    element: <Root />,
    children: [
      { path: '', element: <Coins /> },
      { path: 'coins', element: <Coins /> },
    ],
  },
  {
    path: 'coins/:coinId',
    element: <Coin />,
    children: [
      {
        path: '',
        element: <Chart />,
      },
      {
        path: 'chart',
        element: <Chart />,
      },
      {
        path: 'price',
        element: <Price />,
      },
    ],
  },
]);

export default router;
