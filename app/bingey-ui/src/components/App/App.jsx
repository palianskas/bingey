import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Watchlist } from 'components/Watchlist/Watchlist';
import AdminDashboard from 'admin/components/Dashboard/Dashboard';

import appStyle from './appStyle.scss';

export const App = () => {
  const data = [
    {
      name: '1 title name',
      upcomingItem: '2 season 3 episode',
      releaseDate: '2021 05 03',
      description:
        'When all people die... How do you survive? Magic story about Elena...',
      image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
      rating: '5 stars',
      genre: 'Sci-fi',
    },
    {
      name: 'Salt',
      upcomingItem: '2 season 3 episode',
      releaseDate: '2021 05 03',
      description:
        'When all people die... How do you survive? Magic story about Elena...',
      image: 'https://cdn.mos.cms.futurecdn.net/9EwSedAyyfefRgjgfPFcwN.jpg',
      rating: '5 stars',
      genre: 'Action',
    },
    {
      name: 'The hill',
      upcomingItem: '2 season 3 episode',
      releaseDate: '2021 05 03',
      description:
        'When all people die... How do you survive? Magic story about Elena...',
      image:
        'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
      rating: '3 stars',
      genre: 'Action, drama',
    },
    {
      name: '4 title name',
      upcomingItem: '2 season 3 episode',
      releaseDate: '2021 05 03',
      description:
        'When all people die... How do you survive? Magic story about Elena...',
      image:
        'data:image/jpeg;base64,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',
      rating: '5 stars',
      genre: 'Sci-fi',
    },
    {
      name: '5 title name',
      upcomingItem: '2 season 3 episode',
      releaseDate: '2021 05 03',
      description:
        'When all people die... How do you survive? Magic story about Elena...',
      image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
      rating: '5 stars',
      genre: 'Sci-fi',
    },
    {
      name: '6 title name',
      upcomingItem: '2 season 3 episode',
      releaseDate: '2021 05 03',
      description:
        'When all people die... How do you survive? Magic story about Elena...',
      image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
      rating: '5 stars',
      genre: 'Sci-fi',
    },
    {
      name: '7 title name',
      upcomingItem: '2 season 3 episode',
      releaseDate: '2021 05 03',
      description:
        'When all people die... How do you survive? Magic story about Elena...',
      image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
      rating: '5 stars',
      genre: 'Sci-fi',
    },
  ];

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navigation title='Bingey' drawerWidth={240} />
            <main className='content'>
              <Watchlist titles={data} />
            </main>
          </Route>
          <Route path='/admin'>
            <AdminDashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
