import React, { useState, useRef } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchDropdown } from './SearchDropdown/SearchDropdown';

import './searchStyle.scss';

export const Search = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [results, setResults] = useState(null);

  const searchRef = useRef(null);

  const handleOpenDropdown = () => {
    setResults([
      {
        _id: 1,
        name:
          'Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Hellbound, Flesh-Eating Subhumanoid Zombified Living Dead, Part 3',
        releaseDate: '2020-20-20',
        imageUrl:
          'https://static.bunnycdn.ru/i/cache/images/8/81/818f8f4c10aa94ec4ac96f2677aca0cb.jpg-w380',
      },
      {
        _id: 2,
        name: 'first',
        releaseDate: '2020-20-20',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
      {
        _id: 3,
        name: 'first',
        releaseDate: '2020-20-20',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
      {
        _id: 4,
        name: 'first',
        releaseDate: '2020-20-20',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BMjM4ZTVkODctNGZhNC00NWY5LWJkMjEtYmI1ZDg2Yjg2NDQzXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
    ]);
    setIsOpenDropdown(true);
  };

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
    setResults(null);
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
        ref={searchRef}
        onClick={handleOpenDropdown}
        onBlur={handleCloseDropdown}
      />
      <SearchDropdown open={isOpenDropdown} titles={results} />
    </div>
  );
};
