import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchDropdown } from './SearchDropdown/SearchDropdown';

import './searchStyle.scss';

export const Search = () => {
  const [results, setResults] = useState(null);

  const temp = () => {
    setResults([
      {
        name: 'first',
        releaseDate: '2020-20-20',
        imageUrl:
          'https://static.bunnycdn.ru/i/cache/images/8/81/818f8f4c10aa94ec4ac96f2677aca0cb.jpg-w380',
      },
      {
        name: 'first',
        releaseDate: '2020-20-20',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
    ]);
    console.log(results);
  };

  return (
    <div className='search'>
      <div className='searchIcon'>
        <SearchIcon />
      </div>
      <InputBase
        id='searchBar'
        placeholder='Search…'
        classes={{
          root: 'inputRoot',
          input: 'inputBase',
        }}
        inputProps={{ 'aria-label': 'search' }}
        onClick={temp}
      />
      <SearchDropdown
        data={results}
        anchorEl={document.getElementById('searchBar')}
      />
    </div>
  );
};
