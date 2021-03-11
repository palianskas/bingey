import './App.css';
import { Watchlist } from 'components/Watchlist/Watchlist';

const data = [
  {
    name: 'First title',
  },
  {
    name: 'Second title',
  },
  {
    name: 'Third title',
  },
  {
    name: 'Fourth title',
  },
  {
    name: 'Fifth title',
  },
  {
    name: 'Sixth title',
  },
  {
    name: 'Seventh title',
  },
];

function App() {
  return <Watchlist titles={data} />;
}

export default App;
