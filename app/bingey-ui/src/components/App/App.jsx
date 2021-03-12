import { NavigationAppBar } from 'components/Navigation/Appbar/Appbar';
import { Watchlist } from 'components/Watchlist/Watchlist';

export const App = () => {
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

  return (
    <>
      <NavigationAppBar title='Bingey' />
      <Watchlist titles={data} />
    </>
  );
};
