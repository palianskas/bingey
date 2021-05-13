import React, { useState, useRef } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import AwesomeDebouncePromise from 'awesome-debounce-promise';

import api from 'utils/api';

import { SearchDropdown } from './SearchDropdown/SearchDropdown';

import './searchStyle.scss';

const debouncedApiSearch = AwesomeDebouncePromise(api.search, 500);

export const Search = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [titles, setTitles] = useState(null);
  const [isQueryInProgress, setIsQueryInProgress] = useState(false);

  const searchRef = useRef(null);

  const handleOpenDropdown = () => {
    setIsOpenDropdown(true);
  };

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
  };

  const handleInputChange = async (event) => {
    if (!titles && event.target.value.trim().length < 1) {
      return;
    }

    setIsQueryInProgress(true);

    const result = await debouncedApiSearch(event.target.value);

    setTitles(result);

    setIsQueryInProgress(false);
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
        autoComplete='off'
        ref={searchRef}
        onChange={(event) => handleInputChange(event)}
        onClick={handleOpenDropdown}
        onBlur={() => setTimeout(handleCloseDropdown, 100)}
      />
      <SearchDropdown
        open={isOpenDropdown}
        titles={titles}
        isQueryInProgress={isQueryInProgress}
        onClose={handleCloseDropdown}
      />
    </div>
  );
};
