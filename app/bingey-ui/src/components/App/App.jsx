import { Navigation } from 'components/Navigation/Navigation';
import { Watchlist } from 'components/Watchlist/Watchlist';

import appStyle from './appStyle.scss';

const data = [
  {
    name: '1 title name',
  },
  {
    name: '2 title name',
  },
  {
    name: '3 title name',
  },
  {
    name: '4 title name',
  },
  {
    name: '5 title name',
  },
  {
    name: '6 title name',
  },
  {
    name: '7 title name',
  },
];

export const App = () => {
  return (
    <>
      <Navigation title='Bingey' drawerWidth={240} />
      <main className='content'>
        <Watchlist titles={data} />
      </main>
    </>
  );
};
